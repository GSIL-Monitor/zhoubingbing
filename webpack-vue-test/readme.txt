
#��Ŀ���ü���
	�����: wabpack + babelת����
		// babel ����es6�﷨��es5�﷨�ı��� 
		
	js��� ��vue   https://cn.vuejs.org/
		// vue �������� ������Դ�ļ�С ����Ŀ�ļ����ٶȿ�
		
	�ƶ��˿�ܣ� onsen ui �� �����ȫ https://onsen.io/v2/api/vue/
	
	css���뼼������ less
	
#ǰ�˻����
	1. ��װnodejs ��ַ��http://nodejs.cn/
	
	2. cmd ���� �л�npm �ֿ��ַ: npm config set registry https://registry.npmjs.org
	
		cmd ����ǰ�ļ�Ŀ¼��: npm install( �״���Ҫ���ذ�װ���� �ȴ���� ���� node_modules �ļ���)


#��Ŀ��������
	��ǰ�ļ�Ŀ¼�� cmd: npm run dev
	
#��Ŀ��������
	��ǰ�ļ�Ŀ¼�� cmd: npm run build
	�����Ŀ�� ѹ������
	��ǰ�ļ�Ŀ¼�� ������һ�� dist Ŀ¼���Ѹ�Ŀ¼copy �� ��̨���õĸ�Ŀ¼�£� ���� localhost:�˿� ֱ���ܷ��ʵ�Ŀ¼ Ĭ�� index.html��
	

#��ĿĿ¼����˵����
	api 				���ļ��� ��������ʹ�� ������ �� �������
	dist				Ϊ��������Ŀ�����ļ�
	node_modules 		npm ���ļ���
	src 				��ĿԴ����
	package.json		�ļ��� ����  ����cmd ����
	webpack.config.js	webpack �����ļ�
		�����ļ� ���и��ַ������������Ҫ ��̨������Ա�˽���
			devServer��{
				proxy: {
					"/api": {
						 target: "http://localhost:8071/bmmp4",
					}
				}
			}
			�ڿ��������У� ������ ajax ������ url �� api��ͷ�Ķ��ַ��� ָ����target ·����
			������Ҫע����� ��̨����url ��Ҫͳһ �� api/** ��ͷ
			
			������ ��ʼ�첽�������ݣ�
				$http.post(
					'api/**/userStatus.aspx',
					{}
				)then(
					function(response){ console.log('ok') },
					function(error){ console.log('error') }
				)
			��������� ʵ���ϻ�����  http://localhost:8071/bmmp4/api/**/userStatus.aspx 
			
	�����copy ����̨���õĸ�Ŀ¼������ api/**/userStatus.aspx
	
	
	
	
	
	
	
	
	
	
		