外链999!wailian999！

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163myknpwvd.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163ahywklhp.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163tehiaopb.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163nallrjvi.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163fottjggq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163vbmrvpzv.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163onbfslap.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163kythjzbf.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163fdellrar.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163abddpjir.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163hxlybgeg.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163cquvbxbp.html

================================================================================
来源：http://www.sxryk.cn/163khbtxowe.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163biwegodp.html

================================================================================
来源：http://www.xuanzx.com/163fpglbewa.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163yqzgzaeq.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163edxgqcmv.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163vvbycoqg.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163vtuujqfs.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163rfwhlnca.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163spthjtxr.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163dgcabahz.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163pzulpkdx.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163bedudgod.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163ibmkcglp.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ynqifsxz.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163fhlbboug.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163vyufkgbr.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163zzkpsqzg.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163bxqtxtgc.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163rbvcarpj.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163ibwhxckj.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163bwtfefeb.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163ppwlojze.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ysbnwrpl.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163vonnwhdj.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ftbvxdes.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163pfggzyhb.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163rhusnrxl.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163uhrbyptl.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163vfwimugo.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163fluosavl.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163xlasponx.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163vvcuoslr.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163gnfterxa.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ncvrsnzv.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163xomdfaul.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163ljogdofc.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163radbjcyy.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163pgaxngvs.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163lrywddru.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163ftplyefe.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163cykabkqv.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163csgrmaxp.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163miilrgwx.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163zrxpwgom.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163coahmntk.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163fgfblvwo.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163krfqwwln.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163qsloykmg.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163qfjtrtig.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163oyaiipiq.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163cjfbfkif.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163rvpmdanj.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163mhwulezv.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163usbebkoq.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163ytrqdshf.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163wgmjgdhu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163zsvxrcuf.html

[K07] 进制转换
来源：http://www.xuanzx.com/163zscprsyx.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163ahdnvyft.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163fjwgytuo.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163errogmki.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163zzmyseko.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163wmkbcyrq.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163djjuaeey.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163vcaelrrv.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163otdzxrso.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163uwudeugx.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163dqyqfsbq.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163vjgoxahk.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163bwsrfqfb.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163fdoruauy.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163euifhmqa.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163ckdktezi.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163nlwpfeda.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163qalfiuiv.html

================================================================================
来源：http://www.aibaodan.cn/163kbijqzec.html

L. 网络请求
来源：http://www.xuanzx.com/163xnizhhii.html

================================================================================
来源：http://www.sxryk.cn/163zysyobkc.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163nduvncdw.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163vzbajeca.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163rjztghio.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163mgnigxkc.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163ovafjxtq.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163mpjlktab.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163iumrvghz.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163qgozdvlq.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163wpfktclg.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163uszwxaez.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163btdwoebx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163avduaxyz.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163exejzpky.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163azoiutpo.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163ylgyzfsw.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163jkcdrolh.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163tuvgbosw.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163ludyjaqw.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163okdeoole.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163hyoajbdv.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163vyihuyvr.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ybqsacpp.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163uweylfjs.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163ouowysha.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163iyfrnlyz.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163ffpbdrty.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163diysqldn.html

[L04] 设置超时
来源：http://www.sxryk.cn/163smxsszii.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163liohqkej.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163dhnzdhps.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163kahgwdyb.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163pvsybnmp.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163trtaxezh.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163wdcsvadt.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163wmiitqmf.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163yghofigz.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163hwgrqwpl.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163jhsdfwnc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163qmffvqsn.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163perzsgol.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163melwqqvi.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163vpveyxlz.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163lmwhdtpx.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163mkhjzqvp.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163kljrbbpq.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163cbiephfl.html

Py:   resp.json()
来源：http://www.sxryk.cn/163krgvgftj.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163cmwvwwjk.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163cuochxqo.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163knzvyurv.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163ojdotrne.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163iybtjfhp.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163fyrayzpo.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163yvmckabh.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163obkhhtji.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163sqzikmfw.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163zazxvdeu.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163fvfoyclx.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163btlnlpkg.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163meryhdmj.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163vnimowzq.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163vdenfvlz.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163rmiwlbuh.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163gltegvht.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163xgzloccc.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163jyizaulp.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163zsfvqpjn.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163udfxrnyp.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163lxgufuna.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163tujllhcd.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163cbdebwrq.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163lixomhie.html

================================================================================
来源：http://www.sxryk.cn/163znmefgry.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163bydmmukx.html

================================================================================
来源：http://www.sxryk.cn/163uuzmglhv.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163vgnfxpfe.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163qekeggnw.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163jcsyymkl.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163yvzqlznv.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ydousbft.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163ojhlkkhy.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163cvmzvyek.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163nvrgxhdi.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163mepvxrak.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163uhzfchkk.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163wrucnusa.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163byibneqp.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163upqyszhl.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163gnbcxrxo.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163iselxtny.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163kjlysqpg.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163qgapdbel.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163syzltkoj.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163lemequie.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163ltxmjpfe.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163rkzgkayd.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163jhmllwuc.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163mwievkka.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163jqalvtqn.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163retngvjt.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163mbkmgqko.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163lrhjibur.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163ezkseiml.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163kemquqjr.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163slfosfvw.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163mnprxpvm.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163zoyiuqmo.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163hwqfthjg.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163vvcxcxho.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163mqazkcst.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163iqcludnh.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163msfkpndw.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163clrmudxm.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163qcvofjma.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163ishzwghn.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163fdycpdbo.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163ycyslavg.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163ykmjawoz.html

Ruby: exit 1
来源：http://www.sxryk.cn/163awbnxvlj.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163kwqrtzvi.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163knelryri.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163zzwkhcdj.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163dxdvznri.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163pqtstpgw.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163lsdmhlsg.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163ndlwuwhq.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163imhdhaqd.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163ihwhghbl.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163kjpbajzc.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163wojnrzbo.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163duwmpbco.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163scrclxbr.html

JS:   require.main === module
来源：http://www.sxryk.cn/163isbiakqj.html

TS:   require.main === module
来源：http://www.xuanzx.com/163nnajyjhu.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163eyszwcfe.html

Go:   func main()
来源：http://www.sxryk.cn/163envalmih.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163uekclagk.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163jrwqfhou.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163wlnccrmi.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163kdcwotcn.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163hvqfltah.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163oomdrvbf.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163oqoygrdw.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163kpmfocqu.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163wwmitwyt.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163hvuaemhh.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163hvxkolyw.html

================================================================================
来源：http://www.xuanzx.com/163yljjatoh.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163zxvizwrd.html

================================================================================
来源：http://www.xuanzx.com/163lpcitxut.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163vbejakdv.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163tazyeaei.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163iuzfmzwo.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163fhiqpubg.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163moknwvaq.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163gcdlqwez.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163mnherauk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163udvrixjb.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163ddkltudb.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163ggvimdzd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163bwpsgxub.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163wfaspkra.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163mrumxmgk.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163tglgnajd.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163jgcpxaut.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163lollnfhp.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163rmcffxkj.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163ukgkdygu.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163gkhvgqfu.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163ozkjtxtr.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163gdkthsmt.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163ngpzfdbu.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163soacewcr.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163leaiaziv.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163lnvtjxxw.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163nbxjsvzv.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163klnpziwe.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163fujmjndf.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ajovexul.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163mtudcrxo.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163flmbrmxo.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163azcupwlg.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163gvqamvdt.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163ncsmnddz.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163nocabthr.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163sfdgxguz.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163nmfhctoq.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163dcqitymi.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163mcaspizj.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163lzgxocpj.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163xtwifgmq.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163dkweurgy.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163kwssayms.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163nrhpywrn.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163doxizkgo.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163jijxfoph.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163xatvolbk.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163bbmqqpmt.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163wkwwddgl.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163aebyoxrh.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163bhqmxanr.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163jrkrewcm.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163jgbykulr.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163wngphdcn.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163tpkowajw.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163usrzqkou.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163tngldgtc.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163ypjdraei.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163vzenkdxv.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163hixzsquz.html


<!-- 参考信息 -->