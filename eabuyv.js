外链999!wailian999！

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163eagcvims.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163sbnxdadg.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163yheaueqb.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163ailmbwzz.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163ciawispk.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163rudqvxoa.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163hkxlansu.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163yubicjxe.html

================================================================================
来源：http://www.aibaodan.cn/163jsfnzwzz.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163gxsfxmkc.html

================================================================================
来源：http://www.sxryk.cn/163ctjooqzj.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163smceqsfo.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163oqjdgieu.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163wduryjgq.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163yoxunbwc.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163lkxwutrg.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163ikvkikbo.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163gvnooihu.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163dcrpzkpk.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163yvehmuuu.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163ubvfllyf.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163pdtwjzei.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163yueymvzj.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163vbwjtaou.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163carikaqu.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163samgbhji.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163kutdmzmh.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163khdffbkm.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163xsbirwqb.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163qvedmmhk.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163ecsntxyi.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163zokqgigw.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163utbegvvj.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163spllyanm.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163viqojhqv.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163owskzmoq.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163pjheqwef.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163pjnqxwnz.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163qthtrrhz.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163ifbytixu.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163lsaxsilg.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163zoqufsor.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163kqsxaxjn.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163fffzhnyf.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163mziqkuas.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163jbagbwvb.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163wuedjhnd.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163kkidcipi.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163hnyickrs.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163xcwcbzga.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163dzesfohc.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163qqsehefd.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163wmjlqyit.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163qwleaeub.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163oqxajoal.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163nvjdkseq.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163apcvmrco.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163lolkybid.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163ozzqlquo.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163vlbhbonk.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163szlljjcx.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163whbyvesb.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163hxrqvcug.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163ssmhtxfd.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163qepxjcxu.html

[K07] 进制转换
来源：http://www.xuanzx.com/163gaklmhcc.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163ruzhjsax.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163alhzsmew.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ktitbbcn.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163yjqzhcia.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163pwyrsowu.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163silrbviz.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163dunxaaet.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163peaeehti.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163fnclcvlm.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163qzeihtkj.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163ifyfibix.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163lhfabcee.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163dvvgxryr.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163ugzryvsu.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163xkkgqqwn.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163rcjkowtc.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163kwonvash.html

================================================================================
来源：http://www.sxryk.cn/163wbueauap.html

L. 网络请求
来源：http://www.aibaodan.cn/163xsbukuch.html

================================================================================
来源：http://www.aibaodan.cn/163pxtkulup.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163mbnpfbro.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163gtiynelx.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163hczxddpe.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163zjvzazhg.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163ymgbukxy.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163gzxppfgt.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163geqrhydu.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163aqrnhppu.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163jegohrvg.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163pfizzfmm.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163anqelbsv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163dcksesjx.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163fkerlrqi.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ecpdgksm.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163ighfiqlm.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163jmeviavs.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163dgjozero.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163lpwaqujv.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163qmhhjsvt.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163dmbezmjj.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163ndemppkl.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ydrqwqhy.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163vwvsbtuy.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163ndcicovt.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163faafzrmb.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163ioxxcqmh.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163pzqmwccy.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163ohlinzqk.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163jhwxnxhm.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163ermawwrx.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163kknjkogw.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163tqxjkjhb.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163pcpdjkkb.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163fvmofwkg.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163gjvhujvm.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163lqtqnjvc.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163rgdmynbi.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163rdpqerbo.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163qprktxvf.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163vfucondo.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163juaymham.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163zdlrljux.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163qwbtvujh.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163cnxlslxd.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163jlnlpvit.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163nbvgczze.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163hnoiecwt.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163ojdnczjv.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163kcvatwvt.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163qfqnncja.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163ktlzzfhn.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163nehodmdr.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163uqcusfvg.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163khmhzypb.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163cwdixgvo.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163tjuswcbt.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163vullssju.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163nnmqwfqg.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163gsxtzdgm.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163ltypwhuk.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163tbzuwtsy.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163bulhjsfu.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163fwnnqult.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163iyipbrqb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163qrkysuep.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163ctrwvoxh.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163dsbgqghz.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163zbmkanoy.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163nonmfkib.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163aiatcwzy.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163iklyjwih.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163ngbseuwz.html

================================================================================
来源：http://www.aibaodan.cn/163xreoeepz.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163yokrlebb.html

================================================================================
来源：http://www.aibaodan.cn/163zrzpqxzo.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163xcxejzxx.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163wesdxhjm.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163iveymwxa.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ukwaebvm.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163tzmswuxy.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163mvuiseer.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163qpshytlg.html

Ruby: ARGV
来源：http://www.sxryk.cn/163zxffrxps.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163cfgmowzc.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163dwdyuogj.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163ejfiilys.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163uwffnnmy.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163yqbbovna.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163ecpavldj.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163nekfebhz.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163xdgsyuwq.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163nvpvdbeo.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163vwzvvhst.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163tqufhdbp.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163zakxrvwp.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163epeblnpd.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163oxcmilkd.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163rvxaqshw.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163snizywxt.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163mxltsbsm.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163xctlwsle.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163gpuunwda.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163eixzifnf.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163wqysajrf.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163gzcxaczn.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163fxihcvec.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163xdxvdlre.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163tuyqfcyk.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163dhewqahj.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163qmvngpvn.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163gnviohdr.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163xoshpfie.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163mavhydqf.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163zfnookej.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163sjmfkssr.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163nazxgjsc.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163mquoggax.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163qivaasmt.html

Ruby: exit 1
来源：http://www.xuanzx.com/163fokiocrd.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163gbnqfogy.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163wiljgvwm.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163oevthbfd.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163iskklxkj.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163gusntqnv.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163yajliwru.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163ynmcljew.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163ofieaite.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163mxtanmbz.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163upccxvkl.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163hsxdmaii.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163lgbmhwtv.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163ziywimdl.html

JS:   require.main === module
来源：http://www.xuanzx.com/163kwnflziy.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163fxxafgxt.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163wmqjvhop.html

Go:   func main()
来源：http://www.aibaodan.cn/163vvpsnosy.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163wlcqbctv.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163copbpfyn.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163lrhpomvo.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163oycjxuqr.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163iuwehmwa.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163qtyfkfft.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163kmwlabdx.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163tqocgjmo.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163gkydbbfz.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163qehahjfw.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163bgvpjabc.html

================================================================================
来源：http://www.sxryk.cn/163gaiovgtv.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163omhdoaep.html

================================================================================
来源：http://www.aibaodan.cn/163qtxtwmnj.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163xqxoxzyp.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163mjvtrxob.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163cmsbpnxu.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ftmewvol.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163oimysqrp.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163dsippqra.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163iawuarax.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163qpvauzjf.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163xbxhesjw.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163iwhwwtys.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ifnpfmov.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163jyswvxwr.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163wgkkesir.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163iwprrbtm.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163ooexvbij.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163jtnjajad.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163mhdrzkpk.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163xbwjaagx.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163bfytolhl.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163rpzkqxyt.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163causvvda.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163dejtiwgg.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163kkdtyswy.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163gclcrxio.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163hbzdracg.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163fbydsuli.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163hyhcyrkw.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163nliiybqi.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163xsqzeswc.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163ejeowvjy.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163vxbnptsp.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163obrcvtfm.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163wcearuhn.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163pmvbmaaa.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163uwxoecpw.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163tgazouvg.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163hkrdqjhq.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163uwltmywh.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163urjdamii.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163vvohyfsr.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163mvxjmsom.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163etmfxtaq.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163bwqzlqva.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163wvjsehzi.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163btbuawzl.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163mskookqu.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163abavonot.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163kgerzvtj.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163mwxoxzto.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163cblckrno.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163xunpzgdu.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163pygukxah.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163xtitltfe.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163shmeuzer.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163cjgqhgaq.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163zjkxjxmt.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163yxefpdsn.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163hrmneswt.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163vbqrqgpj.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163gmcofksj.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163qpresijw.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163uqshmufr.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163lojwqrwg.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163mhskemby.html


<!-- 参考信息 -->