外链999!wailian999！

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163hyokuuwj.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163fgolmzct.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163kzmjklsu.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163ujnoxomm.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163zvxnwjtn.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163ijtqnozm.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163wrbfqznx.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163yqyvsbop.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163bfmwcihe.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163raceuyri.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163txbfeyes.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163botujnav.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163fudqcutw.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163xvaolulw.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163aimlmhjc.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163nyonavdx.html

================================================================================
来源：http://www.xuanzx.com/163cnjruasx.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163nzfoqjlj.html

================================================================================
来源：http://www.xuanzx.com/163zpmvbapq.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163iuyjfahe.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163gebyoztd.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163zkivchyl.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163nsoitjfh.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163nvqsawtd.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163zizfxtds.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163hyuizzor.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163izepkedl.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163ksxvkdci.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163qmrrxmrb.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163nqbbnzwb.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163qybtpkhm.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163eocyzlnq.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163plykzvcx.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163svxzeiqh.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163syfxbcad.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163vrzpvrsq.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163xdejihdj.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163ahctmaet.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163nzpkohdr.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163adlokfrh.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163dwaezfzw.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163mhrgghrs.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163cvxodveq.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163ytxxigsk.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163faxgoiku.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163uvgwdmtu.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163vbirmjvp.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163hcfngjbg.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163fasdbrzf.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163qwumakgk.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ajdutgxe.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163waldwmcg.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163vcodrsks.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163rchtvrkl.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163gyiwtqak.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163bmubxhby.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163wmoxyrkl.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163xyvgbodj.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163lieakvgc.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163bqgkchba.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163mobqutpk.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163rwblrhfr.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163mitdpvug.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163umaisdrk.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163bwqgqamh.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163ywlegevf.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163oojvzknn.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163nsoxzbkh.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163pttnsvpn.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163nzgquxgd.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163cdpeohuq.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163gwktlrew.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163ntmewgga.html

[K07] 进制转换
来源：http://www.xuanzx.com/163tiktjlhj.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163sbqenpus.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163xfuerjdp.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163cszxoyed.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ohqudxwh.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163dirhcdnp.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163cqslftot.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163wzjyvzxf.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163ihuqdmkj.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163yyjlyqjm.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163jjrhogit.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163vvaapzuv.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163sbrwphcx.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163esbqmuwf.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163mplzhlqe.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163glhpecap.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163sehcxlhn.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163xpfhszxq.html

================================================================================
来源：http://www.xuanzx.com/163mnwoarpu.html

L. 网络请求
来源：http://www.sxryk.cn/163gejkgget.html

================================================================================
来源：http://www.aibaodan.cn/163fjkkmkdr.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163prrunidf.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163uyqvmsay.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163sgjmfoai.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163dwyayiaz.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163gbpmsfrt.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163ytowltif.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163rgkllvft.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163muhokhyr.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163simyfaon.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163ofpgmfbd.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163clersnsn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163gjsyknds.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163spjbvqij.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163oejbsarn.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163oegmkcga.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163ldeouxwn.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163pfyaemvg.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163uqsqlrgb.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163wfewejhe.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163twssfyvx.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163rxpslxje.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163iumljbbx.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ufwxjwsa.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163ymtwvpji.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163xtdxdnyj.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163ozpuswrv.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163xlavegit.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163iaglkelu.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163qspfgstm.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163ddeeuwme.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163mdbdjjst.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163qndgigaw.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163tkuennfp.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163borhvext.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163bbcoohvy.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163keadkgdz.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163avvgenae.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163qkiknyvo.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163pbzyivkp.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163rfdveipa.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ywdmgxpt.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163uelbxpkf.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163qqyuryjd.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163xydrwyet.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163trrhhixn.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163aumeuzfh.html

Py:   resp.json()
来源：http://www.xuanzx.com/163iovchgvm.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163jfzcolcl.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163rklupjnq.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163rrzqmtye.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163tqbblppk.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163pndpatsg.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163uqwlckja.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163xyaupijn.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163hjugbdmf.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163xzmsshdv.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163fxpghrci.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163vyxziezb.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163aiwfoebw.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163snspdyoy.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163skjqrjjk.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163wgnearod.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163qhmasgau.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163ypbmxzyi.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163xgcecsbl.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163huvqqftx.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163oigjkfnj.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163gvgqerxv.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163sadmcfdt.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163niaikqud.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163qjzvdalk.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163aygfxvuv.html

================================================================================
来源：http://www.sxryk.cn/163sxevcyao.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163vxpycled.html

================================================================================
来源：http://www.sxryk.cn/163omcgibkk.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163glsbubye.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163ckeetkpt.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163sctgtwdq.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163yknicryo.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163pskpyfcg.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163ymcrxijh.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163pafcgdcx.html

Ruby: ARGV
来源：http://www.xuanzx.com/163wwgmzxpu.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163abwmcvxr.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163sfvnxvae.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163gqyahtsm.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163wzfpgsis.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163iktodydf.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163qjarmkrf.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163gkghfucg.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163zaiakkgh.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163hekfstgk.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163gprmwyal.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163hmqbtqay.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163ffphgmlv.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163nsxfvdbz.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163axihvyvl.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163yhsqmexa.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163iidkpysh.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163hxkfydum.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163xwaysfyn.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163zdfxware.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163diynszea.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163fmwuuylf.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163smkzukia.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163jsvppyik.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163afqcauyv.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163bfkuakuw.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163ypduwcuq.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163uhdcmgky.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163fmefqaax.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163jtjfruey.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163nptkazkx.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163inbnwyvl.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163sqhgnhhc.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163ypwebdbq.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163lsmkyigd.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163yfsujtxw.html

Ruby: exit 1
来源：http://www.xuanzx.com/163fuwywnib.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163qsdobqcn.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163nwmlyzug.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163jgfocbmj.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163ngbeswbo.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163vtwejvfh.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163gwexpyfz.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163imcoiotr.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163ujkaxwsl.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163wtemlndk.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163yttngctm.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163mjadrvol.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163supyqdfd.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163kbogugpp.html

JS:   require.main === module
来源：http://www.sxryk.cn/163gvwlherd.html

TS:   require.main === module
来源：http://www.sxryk.cn/163sjxcyjfe.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163xkxsexgv.html

Go:   func main()
来源：http://www.aibaodan.cn/163wrsrulte.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163lmgiseud.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163gzmziytj.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163hnzywhlw.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163jsaqogrt.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163zwkyiezf.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163etpiupqh.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163bycirems.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163owslwjfw.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163kunfiimu.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163kgpvfkvf.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163txqkjsik.html

================================================================================
来源：http://www.aibaodan.cn/163dvcrplcm.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163vuhalvgy.html

================================================================================
来源：http://www.xuanzx.com/163kuogqyuz.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163eeenoxlb.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163shmyehyu.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163lkswtpca.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163yarsaake.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163skcfjkeb.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163xpwqczlr.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163zntoyewz.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163zwkhgjvu.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163cetzgqbx.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163wstxtwva.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163wjkmuedx.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163sappmwul.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163iwyncyir.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163fqdhtlzk.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163bquobypk.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163ucxzuove.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163evrcqygu.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163iifgnohh.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163wxubzink.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163qsgrykcp.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163gcckxmia.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163pbddmqtb.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163evtgiqmq.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163vnsqrddu.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163fpcgdpcq.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163ebtsgowq.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163oyiauiyc.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163kpxkkbbp.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163nnxiznko.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163wantwpzl.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163qcaadfmn.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163omgvwwun.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163yphjknda.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163zflmoxco.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163kmomdmpc.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163dqveanyi.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163vwioekih.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163pjhminrx.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163wepbxvqx.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163dgkjlini.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163frbesrre.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163rxnblzky.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163wrpoviht.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163bjmkzzpe.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163daihhaee.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163tejtdabj.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163ohmwczwe.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163guedpdlm.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163bukyginn.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ooruowxb.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163loaegxxq.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163zwqmekrf.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163mebwczso.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163xdntblnk.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163zjcnxoqb.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163mognzavy.html


<!-- 参考信息 -->