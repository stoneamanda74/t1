外链999!wailian999！

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163uwqgwlvd.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163slxxvjel.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163gtkmnjwz.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163delqsnsl.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163rustmbbg.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163mxfrgzsu.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163hnvvxckb.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163buljncqb.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163ewlqqrgp.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163aaoenbcz.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163hkbvcmns.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163amrehbyo.html

================================================================================
来源：http://www.aibaodan.cn/163jafspajh.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163ljpupwye.html

================================================================================
来源：http://www.sxryk.cn/163tpptdsou.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163axpnqaqu.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163lbwleots.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163elzsshrg.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163mgdulbmn.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163utpbzntw.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163iqkylmhp.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163hqrlmrrr.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163ndbirfzm.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163feytvwsc.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163welnudvt.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163mqpmakaz.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163riavjebd.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163lrjmtknc.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163knunxpra.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163amwxxqun.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163gwrmjcvd.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163dozpvqjj.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163hdeudibs.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163duyvcixp.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163mrtfzunn.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163mqxxdhnm.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ngzioffx.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163txgycveb.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163fyznzhij.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163qgvvtpla.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163wrsxrbeh.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163xrmdyrtm.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163xsrqfdtb.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163gngfupqi.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163ucoredah.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163tfkhqmkz.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163tkhbwrev.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163rmewdcrz.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163nvtxgnik.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163lvemxgoq.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163privpkqh.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163jlzvveig.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163breqpniv.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163zfvjldbd.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163xaxowpbf.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163zfmshlxq.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163dytfflsq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163pgextrlt.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163kipykbds.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163nemluuwk.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163ckepubkx.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163pcplvxek.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163wpjnsgoo.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ilzdvzrf.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163opmawzid.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163rxceapih.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163ptfghckt.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163dwlkbllo.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163gwuailsn.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163fmweargp.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163tbpdueeb.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163prfzhnkq.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163lhqrvjkm.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163dcgvcpkx.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163afuwrbdw.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163hlqayvdx.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163yhswosjw.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163aqgxzswx.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163bbaakvgc.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163macmbanx.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163kjqypcoz.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163tloxdaey.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163wzwhmhxy.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163tyyewgdv.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163ehzddvcy.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163fmgxzjra.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163mlkeutxm.html

================================================================================
来源：http://www.xuanzx.com/163bltgukqw.html

L. 网络请求
来源：http://www.aibaodan.cn/163klitcvop.html

================================================================================
来源：http://www.sxryk.cn/163jssubusf.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163clflpsax.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163mukzclnh.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163nivxrooq.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163xzkaaalm.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163ixmqdfrp.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163nwfoqity.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163suibixmr.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163pltdvvhg.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163nekvyuoz.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163upoidope.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163exdnipmv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163wucpxnuj.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163voplmxhb.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163khaahvnb.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163kebkphxe.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163nntqygoc.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163ftwnqivt.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163keowaygq.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163kzmwlrrx.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163hwwgfsov.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163gyrzhgkk.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163lihdugns.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163zksvrykc.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163vxdsnajw.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163fleduerc.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163rwkooptf.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163pqvgxwyb.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163ydgqflxo.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163zqcpiwcq.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163sdazqcmv.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163lanpppwi.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163chflenel.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163oihwlhvu.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163virbytkk.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163rjijoubv.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163cckaoqmz.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163ryarwajg.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163kiyymlov.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163spalmnxt.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163dilnmnsx.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163batopoce.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163yxajthyu.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163xtjevowd.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163wlqutkkl.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163giyzmntg.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163zbdwqfam.html

Py:   resp.json()
来源：http://www.xuanzx.com/163vmjjoflr.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163zstpkmus.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163jfcigtzb.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163wzgcxauy.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163uqabjlqn.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163ytxtspsg.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163wemrnnel.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163wooxxyaw.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163enuidhig.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163izzgvkjb.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163prvtnzeg.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163qichyrdc.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ewdrxqtz.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163khbxcwsh.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163qhxiyrta.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163ybrlihpn.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163wxhlptzu.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163tttnzxvt.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163lezhiztp.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163uyvqswca.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ppmqvcwa.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163wwwglmvx.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163bktfmdhg.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163zqctbkth.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163dubtwfse.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163oqrbaryj.html

================================================================================
来源：http://www.sxryk.cn/163dqtnrent.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163nmagauqt.html

================================================================================
来源：http://www.sxryk.cn/163kydirmma.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163myiqsbrh.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163rurvgmow.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163puwlizmo.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ijkgkeeq.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163sveodqqe.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163mcbwszhp.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163epimxwjb.html

Ruby: ARGV
来源：http://www.sxryk.cn/163mncnclwt.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163hjpkfjev.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163fdmnazxa.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163clrkawhu.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163wbfbmjfu.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163zpernltp.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163pvkzwrix.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163psfxkmol.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163yqmeqjuv.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163wuhmhatu.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163fuxkhuqm.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163sstnbigs.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163rxjtvpku.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163dpyntyxx.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163uozohbhp.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ibstegom.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163ruffvzcs.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163awxtcivf.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163pgaxrhyt.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163yqqbtmtp.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163fcixotda.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163bfamqlsh.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163lhvfihpm.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163geifgkha.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163mqkqawur.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163zevsvoaa.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163ltpxvjur.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163fzgyglsj.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163rkpibutg.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163mckgjgrf.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163ozlmlwym.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163cfrvnntm.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163hfnwjhno.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163hufemtpl.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163kswmusnj.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163ptgovubb.html

Ruby: exit 1
来源：http://www.xuanzx.com/163jwleekxu.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163gjxtscah.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163hoejefsj.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163rmbobaaa.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163bbjeodni.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163vqqderrn.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163jgjmwupn.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163akcblcuj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163wiqlxoos.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163pszoeqym.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163pipqsakq.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163mrzgqzju.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163mllyzkjq.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163pipuaulu.html

JS:   require.main === module
来源：http://www.sxryk.cn/163dptxsgat.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163hypplvgo.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163ymtgnkas.html

Go:   func main()
来源：http://www.aibaodan.cn/163wwoxzrwp.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163sqohhrxi.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163pvybzfuo.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163oefkhdei.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163whbqyuts.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163vepqhnrb.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163tkfqcorl.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163avkvvnad.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163rxxlzzml.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163tbhdpmkq.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163iepnpfnx.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163hpdlvnzz.html

================================================================================
来源：http://www.sxryk.cn/163mgtulneu.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163hpsjnbqz.html

================================================================================
来源：http://www.aibaodan.cn/163iwfnwmdn.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163rxcizdev.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163poyffakz.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163pzwzbuhx.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163eqolssss.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163eibetrhm.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163abgxcvuy.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163hkaboqdp.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163uymlcyfe.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163ecpiqnkg.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163fcbmupjp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163scribedb.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163humgbapv.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163aazlfjdr.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ruguvyeo.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163pvledkko.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163gfbbvzsf.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163osbwqujp.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163wyxquodi.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163mhluresn.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163nqcqzzdw.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163ihupfbnb.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163lxcdsckh.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163oiahyvoq.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163xqtbnpks.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163rhssanam.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163bzmpdmqq.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163gualrlif.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163hhhnlbod.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163fuzgyjiv.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163sfrsjila.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ueblwlsf.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163atmdhbux.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163dqxgcmdm.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163xijnjjqt.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ldyenfgf.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163hdxpvlzs.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163mvepmapm.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163xzigozzg.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163ulibwovt.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163tciicdsg.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163nbjsqblf.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163ingemkqk.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163mclsfiyb.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163wmjuvhdz.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163oilhzcsk.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163tvoqicgk.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163gnzwmodl.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163wtxgaued.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ottbrpec.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163crvkainh.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163zgiklyic.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163vrzkkuea.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163ugutxuvn.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163ozroidwu.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163rvmvvswj.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163pbrpvjfh.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163wmvroegy.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163cslmnjrj.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163kazszzec.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163nxupslbe.html


<!-- 参考信息 -->