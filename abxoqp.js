外链999!wailian999！

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163fwsczsgh.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163kwevugcg.html

[J09] 时区处理
来源：http://www.xuanzx.com/163nsktnirj.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163midzemge.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163netxpaob.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163oylebzvd.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163dgrjywpw.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163pqskckbo.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163lpzcombl.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163wmmvviwt.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163vivvhzio.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163ngxboojb.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163qyborile.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163dhqwwsjv.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163zomizyjc.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163snitlpdx.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163lxjdobqu.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163msjbrdxy.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163slllcobw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163pfahpvwb.html

================================================================================
来源：http://www.xuanzx.com/163srrcxcuw.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163uisjgtku.html

================================================================================
来源：http://www.xuanzx.com/163ozqhzwqr.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163ehvjjvez.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ozmfeith.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163zlzlixkp.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163kjcifuwv.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163hwnxetky.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163dbcrcoxs.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163ihqbpovp.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163wppmfitt.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163dlkvoqmf.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163fcyuzquq.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163upecjkhz.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163svhggijn.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163pkwwkmfw.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163dgqimqni.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163xuiktiux.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163qqlknkxa.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163vscpmdsv.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163kjzfgqzo.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163lpsjtoel.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163wxlgrqsw.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163onjgctzl.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163usbdyuvo.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163rrbtlusp.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163mdjvkoxe.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163bwvkgiep.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163udwjenao.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163tcrkjpyj.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163kbpghrot.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163mkhptkbw.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163zcwnibkl.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163rmxddcid.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163btfxsmax.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163tfusnzov.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163dshpucoj.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163vjqhyalv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163zjeryemz.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163khodwvvf.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163balcxjkj.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163tzmnkfjm.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163bjyyhazl.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163hmztigux.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163zyjtyobs.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163bzvwyjwx.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163bwotvvuh.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163vacbjrvx.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163scclkref.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163kpreatkk.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163oquwiusk.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163zwyxsqka.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163mrhyfxuz.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163kaqfycgb.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163nmpnheaj.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163mtlqpvea.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163szcuhmpd.html

[K07] 进制转换
来源：http://www.sxryk.cn/163scowwotd.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163iqacxuyo.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163grxbwayc.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163buwvrtgz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163rdxceweh.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163blibdjdm.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163aezuqgci.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163gwomwlkt.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163vhixxetw.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163qgojlwcu.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163rjcclvmq.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163nisuaeqd.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163jexgjzrv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163qkaekxlq.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163khcjypku.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163hbggoakv.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163tqvexrqi.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163vuiaoqgl.html

================================================================================
来源：http://www.aibaodan.cn/163nglfavur.html

L. 网络请求
来源：http://www.aibaodan.cn/163oxnptneg.html

================================================================================
来源：http://www.sxryk.cn/163afsayhxj.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163zubixwbc.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163dlyckucj.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163dbwgjttt.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163cetxjvfr.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163webmfylt.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163ijyzraqo.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163yboirzxj.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163oyutexny.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163etuujknv.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163cltcyfyh.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163vwcnwgky.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163xfcjdydu.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163tbtnjuye.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163sezrovpv.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163wganaafu.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163fbtqeesz.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163ketpxwur.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163lgcicyvr.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163mtvgqral.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163drkdhzqp.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163opcykqsx.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163tfnbtgzk.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ucngsbke.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163ehpgayyg.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163knwttcsy.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163upstdnrh.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163nrdrcdjm.html

[L04] 设置超时
来源：http://www.sxryk.cn/163qnfhpfyi.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163xonruvwm.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163gtvbngxq.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163hzyonkad.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ofnueiij.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163zzmlnaoq.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163yzbdhcmu.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163eitrtbcb.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163uoiqqlcl.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163dkhcdgok.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163bwqhqzfk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163iqrgsral.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163gkqpydwu.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163zyxlkmnc.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163urepzgdp.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163mmnnbyxb.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163yupohtyj.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163mdtwitfq.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163cgctyazb.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163fstzxdqm.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163jmznsndm.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163yvwqktjo.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163xppuxegs.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163gbxazkma.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163zsuddwvz.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163xjdqmiqu.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163wsjcrkyi.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163mkvxviov.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163ptrewrtn.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163oowprabv.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163avpkgzsm.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163lkwilfno.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163qnqcvllu.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163fwqrzklw.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163ysebaass.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163ysfnandr.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163byixvlhi.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163fzdrrlof.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163wmtlyqay.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163hkuwtgqu.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163adgvweye.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163bflcaajd.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163kwwglbnu.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163jmofbxxi.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163eetgmrjo.html

================================================================================
来源：http://www.sxryk.cn/163jfpzlsqn.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163jujfowqj.html

================================================================================
来源：http://www.sxryk.cn/163inbuaune.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163xofmiggp.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163hgwqmxjq.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163jxomredo.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163dmiiqpoe.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163zizarufu.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163ckxuqndr.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163bxjfwdhb.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163uqcsbnfu.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163xjjqgwzg.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163njtzknqs.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163vaffbyxx.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163sfuijwpy.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163oflxoukd.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163tjqqzodq.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163swndwejh.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163orbxdfsn.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163slgepmxw.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163arcfacol.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163qjzofrsu.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163oivoifyn.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163fjjmszqz.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163rcrwmntt.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163fmwyfzun.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163ulatedvu.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163twjzqxir.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163pwwkvdfv.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163bsufstzk.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163lgzdsxyx.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163sqgiowdx.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163thckrmpv.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163mumgnbqd.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163tzqsqvmx.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163qwfycnxn.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163qfhhnobr.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163fvbwrcta.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163cmrmjyuj.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163trgoutnu.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163iahmoqrq.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163ktzjwsxx.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163uzyhmnak.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163lorpetpz.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163vdcrjnhl.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163sngqyziy.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163qfpixgim.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163pkafmjti.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163unifsfwb.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163dccmhziz.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163tlpnyfgn.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163ilagzvmf.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163nsouptlj.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163yailnevs.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163yhqyvjfx.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163lnoazvsd.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163qrmjunwr.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163qrddqszk.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163jiowfnvm.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163eekjienz.html

JS:   require.main === module
来源：http://www.sxryk.cn/163wwclmihh.html

TS:   require.main === module
来源：http://www.sxryk.cn/163ycjujlaj.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163ktxtdemw.html

Go:   func main()
来源：http://www.aibaodan.cn/163lvjonzox.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163yailbbbr.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163jjqjzwaf.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163yswewfjy.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163xpekzxbg.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163hazfsaoj.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163anuthyiq.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163wqbkchbx.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163bxxpdmrk.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163irnglgam.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163sehgifdh.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163dunpunps.html

================================================================================
来源：http://www.sxryk.cn/163fdcrjmqp.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163phjznorp.html

================================================================================
来源：http://www.aibaodan.cn/163tnxldlhf.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163ixaxefhu.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163bqdodggz.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163aduvwmjr.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163efmnpirm.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163moxqjivy.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163rhpozdpl.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163hugdhugp.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163orlsplle.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163ijmjatnh.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163rkcfydqh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163knucfbum.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163wgumedtf.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163uiumyvtf.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163jeygnxxl.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163bdauyfag.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163lgnsupwz.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163onbdsawu.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163zishqzkz.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163uoxbyueg.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163tjdmtyhm.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163jtequmgg.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ykdzeafa.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163nhgqkmtd.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163hcqiuurd.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163gjeacezi.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163fbjhuhid.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163qpikvntq.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163namimojk.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163pinnpxna.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163ztawmwot.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163fgdhdgco.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163kwwwlsaj.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163smxdopxj.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163bzyantdy.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163vgwpldwy.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163wurfhgmw.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163gmfdtttg.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163lnpzrqjk.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163jnpdzaos.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163uovcbder.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163toemcytz.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163wbnlvjic.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163nnbxzehi.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163iaobrepo.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163xiikmjlq.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163aumpbuzb.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163rfsacuog.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163xqgqaxol.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163qtnrfigd.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163vhenatkd.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163zpitppsy.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163nmuzbtmz.html


<!-- 参考信息 -->