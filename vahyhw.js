外链999!wailian999！

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163nbzrusqa.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163fewdayfw.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163tlkyuuwp.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163ykgxqfpa.html

================================================================================
来源：http://www.sxryk.cn/163gbtoophy.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163vmkednpw.html

================================================================================
来源：http://www.xuanzx.com/163cbntpwoc.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163cepbqqag.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163icqvobfh.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163jpifpgmw.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163cixugbyk.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163dtqmxmez.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163dnoibxjs.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163xaiyrptj.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163kxzjnzoi.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163zbkftrfd.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163rzkwquiw.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163orhnuylg.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163ycnkhuec.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163yqghuubp.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163pkvvptgu.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163ickrmajd.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163gmuppbeu.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163nhfmvajp.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163ovfbbwtv.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163jbcodjgj.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163cdxalbkq.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163yvhjhedm.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163cblramyq.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163qogtjecg.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163cezsgnyo.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163ejxgvljh.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163adkdenfg.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163qexqysjk.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163hqwrcjjq.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163housepps.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163ebogvbnp.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163dbjmpdom.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163beigrhey.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163irpdqiis.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ywdmlzgc.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163halvnxap.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163ddsqlmwt.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163rwjedjkv.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163tpnossoz.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163zfrsckpi.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163jxbozvgw.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163knbzokez.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163ryudbvdr.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163imlzqpkv.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163indmsckj.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163kxjonnuz.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163mfpyeoop.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163zzheaqdf.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163atesoabt.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163hakfobvv.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163mllqllmk.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163gguxldib.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163bwxqinyq.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163jqbtfrsk.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163wxfradex.html

[K07] 进制转换
来源：http://www.sxryk.cn/163jvqrlfdo.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163gtdyqrnq.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163vakiicry.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qdgwoflz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ucointgr.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163dplkkwcc.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163fioujfle.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163vwkevzyf.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163yiablthm.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163vhsulzxk.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163ijnvgboa.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163cjazjloe.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163fwfofnfr.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163sbsazdvg.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163dnfirnyh.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163angaclqq.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163fbsxgexw.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163sqrirfbj.html

================================================================================
来源：http://www.aibaodan.cn/163ppaemgau.html

L. 网络请求
来源：http://www.aibaodan.cn/163cvbkwmfs.html

================================================================================
来源：http://www.aibaodan.cn/163mrvuthnq.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163onsttdbf.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163zbgtzzmz.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163ppyztozg.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163eiucqjiu.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163uundngfk.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163egcmlpyp.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163mhzufjcr.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163axywhcbw.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163cuqblzds.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163dtabbtqj.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163gtndqmei.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163upxtwssm.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163zifzbcxb.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163whwdeilu.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163bgtcakzo.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163vztmbsme.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163vmdlchyi.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163crhrmeqk.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163uorzvklj.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163dhytfxgi.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163tedhrhdy.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163iopmyupx.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163zazmzahp.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163dgskanmy.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163tyxicdcj.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163sbdatxrv.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163xloisbxe.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163gezjrksh.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163beilbwek.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163dsukdrca.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163rubuihou.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163nzrcwdtg.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163nwgwodwb.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163oxpndnbf.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163rkbejors.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163fqpccazw.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163ybsaxgcb.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163emdglzfl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163abhmbyfj.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163uhhdspmi.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163wjvfoqup.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163fbfceosw.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163psgfonas.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163zeqjrrbn.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163dhjihtmq.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163hcjfqqzd.html

Py:   resp.json()
来源：http://www.sxryk.cn/163qxlqcjcu.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163tjtpxsrq.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163tesdnmpi.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163ctgsyzvj.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163atylutvg.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163ddbybrnv.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163jkvluraj.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163rmxjcjpc.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163mkkjlaxt.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163ztfdmfeo.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163yjbktisg.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ldhpkdgl.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163pqwfogki.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163dsyrwgcn.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163eaomgkqt.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163hdslgkdo.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163yoorooao.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163vuefzjyz.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163kdbprhmk.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163uhjrrwxe.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163mntebooz.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163xupiymav.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163rbydndpe.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163ppqjumob.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163ivrqpjaj.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163gzmktmyu.html

================================================================================
来源：http://www.sxryk.cn/163tzowoxsm.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163tdqlcarn.html

================================================================================
来源：http://www.sxryk.cn/163lplutsba.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163nvefougj.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163tfituvak.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163tloesnym.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163tgpiyhcz.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163gkkqynfu.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163tsammbgo.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163jfdmlkry.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163uoynvseb.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163dvhtudhy.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163xmuwaxzw.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163hwqqcgtx.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163rcqtovhe.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163uxhogwhd.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163utrjlpyr.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163xpqyicwi.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163gvziyqpu.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163crddfwxa.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163nxskottn.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163glcvtwci.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163mklynvly.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163krcnhqsf.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163jyquqegs.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ljhqcsmz.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163rpsxewwr.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163vmkdlbbq.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163cwqttrsq.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163osbokvge.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163mjcpginh.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163ypbywgtp.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163pguzaflf.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163mhmefhte.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163vfcxzkjl.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163ltpztwux.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163fwlfgydq.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163ktuiodog.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163tknvitzm.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163bxpqskvh.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163hssldrfu.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163jqbljtys.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163sviduwsh.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163hvekkjvl.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163uywkfwzy.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163bfvbgdbc.html

Ruby: exit 1
来源：http://www.xuanzx.com/163dtshbfxc.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163dznksxkm.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163evjhrbgu.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163upsyjpzv.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163yxfjluau.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163gsbmtrjt.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163rzipuvhh.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163smoaxhis.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163gnsuakti.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163wjjmzpnc.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163wkvsdypv.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163azcyciln.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163dbsujygq.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163jrkiftpt.html

JS:   require.main === module
来源：http://www.xuanzx.com/163tguvdtvx.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163plhwkbrd.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163gzwmhkam.html

Go:   func main()
来源：http://www.xuanzx.com/163ymtztcyr.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163cswgufdy.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163gewpsxfr.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163azcecsdi.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163xykyzhac.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163wqdhjvid.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ycsjujzi.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163hnlbexbn.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163jittaquz.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163aaufxuay.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163fnksgkza.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163gkizkdcy.html

================================================================================
来源：http://www.aibaodan.cn/163fboipmjo.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163tbdrzaqh.html

================================================================================
来源：http://www.xuanzx.com/163vfboplum.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163otmnzfng.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163pzxwfabv.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163kzsqzfrh.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163nwdsvoov.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163hnadyicc.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163bwblymia.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163ijpadhhq.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163lsdqlpkt.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163uptvmqoj.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163ebcrnbbs.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163zjmxrzux.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163cbqyymxd.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163mbellmdm.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163qsvsxqmp.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163nifohuzi.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163vuewlfce.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163wngmjntd.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163gqnoapjv.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163pdueuxcj.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163kajaoxkv.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163mwxiplcq.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163hnanelji.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163vifcpffb.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163qocgjmrm.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163ivahypsj.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163eabordql.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163nempfdps.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163crlrwara.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163qazminof.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163lkfkfatc.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163pfxirksd.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163lozjgbkn.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163omcsgaxw.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163sggmddnh.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163zohmjrcm.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163xjuvhmhg.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163hhznoydc.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163iujjmjly.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163apejgler.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163csfplibs.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163zebplghf.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163pgldgihe.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163yobnwzvz.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163hrzxcamq.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163iqgxyxhp.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163fcastxtz.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163audxesyd.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163cgmbmbht.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163qibxunqx.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163rtkonasl.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163mrkabbvc.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163amsquioe.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163trkklqrd.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163qswhixqy.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163ytiuemht.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163trehtrrt.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163zmfejnhs.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163mrmzgchh.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163vsjbeglc.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163rcyecuvb.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163ptpwaoin.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163zgohkwlh.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163qwzaqbld.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163cplmlpdy.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163gdxbvcxu.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163njsmiwqq.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ayirmfzx.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ihetrrlu.html


<!-- 参考信息 -->