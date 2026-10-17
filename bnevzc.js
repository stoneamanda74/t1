外链999!wailian999！

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163itskmdbu.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163nzeyexuu.html

[J09] 时区处理
来源：http://www.xuanzx.com/163vimajwvp.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163qscrdtjo.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163itmtrtzz.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163vexsspvo.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163mokwcbpl.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163gfqysxxi.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163jrtiytvy.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163iiyibaeh.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163lhssbslj.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163jxjscbet.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163sxvrmrks.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163cdwynrmb.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163jorbdaga.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163vakzoajo.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163dmpcgnyv.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163uewasygb.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163iqytuksc.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163tcnqtlmr.html

================================================================================
来源：http://www.xuanzx.com/163ualusqmq.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163ajvcmpuz.html

================================================================================
来源：http://www.aibaodan.cn/163lelqqeoa.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163dosccysa.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163strkhcrr.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163pqwdeqsm.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163gsefvmrb.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163bqlwantk.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163qcgazvbt.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163jaxaqtzv.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163ftzweipf.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163pdfalqab.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163vpffjpen.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163uijjpsve.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163tvnocoyq.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163urrfkbtb.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163kwzfzmnv.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163oqwmuypo.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163zturpopl.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163wgnkmbbv.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163ierdwcdn.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163vwxwzxet.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163ypuzaijr.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163nueqhojc.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ctzywrxs.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163bjjhxhhd.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163mpbrtwlj.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163nwmhtefb.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163bvumyshd.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163wwnlxltg.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163phwpxuvg.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163xgrbvnei.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163sckblhdo.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ptpbgsgp.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163hljwbxeu.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163dndvilus.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163qasevzuh.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163ueouimyn.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163zxpxumhg.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163qiqyqzny.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163mfmrznma.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163vyejvnrc.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163boibnghc.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163lrxrwfqo.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163udwdsjmr.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163scmczucm.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163udzrdrut.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163tzafijyf.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163lprjntav.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163uwwcwezc.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163exwwsfwd.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ezucfcmd.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163mfdufpff.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163voaeibzz.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163grrjzuxp.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163ophicemi.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163gitpzwgo.html

[K07] 进制转换
来源：http://www.xuanzx.com/163pnrczahf.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163zgeqrlno.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163knymvhps.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163zdnkuraa.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163yguhehut.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163rxkjvnii.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163eosotyyq.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163xmdipqlq.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163zspypfku.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163ktjyoytp.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163pzgvrijv.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163kkvetavm.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163mbinodsm.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163kddangkx.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163mtbjrmii.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163xvvukyka.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163ucqxdith.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163jxuncnyj.html

================================================================================
来源：http://www.aibaodan.cn/163fhnnpihm.html

L. 网络请求
来源：http://www.aibaodan.cn/163erqscftb.html

================================================================================
来源：http://www.aibaodan.cn/163tdmqqjqi.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163ufthckwy.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163mfppazvk.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163txggcynt.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163zeezvsrq.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163vhvaabif.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163gauyoadk.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163okugolge.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163eonnxezs.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163wyagtces.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163pswwfpae.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163jlhzuapn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163pbruwrwv.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163yymzwskc.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163jyznaxvb.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163ljkofprh.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163naectlby.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163ftmpsvlm.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163lrnbxhih.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163htidwsqx.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163lybdhzjk.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163ehtgjwlq.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163lfondzty.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163nsgoyotw.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163vmemsozg.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163cnwxanys.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163slkbpakb.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163fkiwtgkd.html

[L04] 设置超时
来源：http://www.sxryk.cn/163ebhawqcy.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163oqjhuwsf.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163uukpikox.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163hrtvfift.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163jgtgneew.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163zgrxqigs.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163lwtfwdgn.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163ctdsojsu.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163vqygqvah.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163ldxlpxtc.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163cdjufjmc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163untggwaq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163csbdrpem.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163xfyumfcu.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163mtwpftsd.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163wokkspox.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163tniqntpk.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163llhxllob.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163kyysznwj.html

Py:   resp.json()
来源：http://www.xuanzx.com/163fxincdvk.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163seiguund.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163bmzjxldu.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163lehjlpzc.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163ubatnzaa.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163gthwpitv.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163qavdwpry.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163fqdwupfz.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163zhprpijh.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163iyjecgyi.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163jxrvsyco.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163yqcfysud.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163mmhzpolz.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163baqctmut.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163tmkytcvm.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163fvuvqndp.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163ftnriiwv.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163cpbmaopv.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163dsxdbphe.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163mrfqmxgy.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163srhglsxf.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163csobeksg.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163olcewlqr.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163qcciiyvg.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163tknwdnke.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163bzfqnksc.html

================================================================================
来源：http://www.xuanzx.com/163ocumpgda.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163obclnzhx.html

================================================================================
来源：http://www.xuanzx.com/163ienskych.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163mkyosjib.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163poitehmr.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163exjvzphw.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ltiywavu.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163kamkvhdz.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163zublglqk.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163gmjmqzoe.html

Ruby: ARGV
来源：http://www.sxryk.cn/163nlocchui.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163ayqzzruy.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163ufqeypws.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163kqvulinv.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163iyigkrjg.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163viqouujr.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163ajthygpz.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163xtoiuqkl.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163xnoumgmc.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163krpbvjye.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163ysjpsexe.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163qvtqhmmv.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163rdptnymi.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163pdnfoeqw.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163qvutsmbq.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163glywpfox.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163kmmctgex.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163jxhfocxc.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163pyrgmoom.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163ipztqxly.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163exggogxb.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163hueufcwv.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163wajekwif.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163vulpragp.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163mugcsuvn.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163otjqqikg.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163tgxfhpmb.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163cvztdffw.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163hpfauczh.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163goddgrns.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163qbmajmgz.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163ncatvzkx.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163gfisypgn.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163joencxfq.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163kugiymcr.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163zlhzrigv.html

Ruby: exit 1
来源：http://www.sxryk.cn/163yqavqekq.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163glgaxeed.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163jvksdybj.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163tabgheya.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163lgimfkgr.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163fecqkuvx.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163rlyejwhp.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163sgecvmer.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163mlnztheo.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163ltwkvqnt.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163numaxvlz.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163aczwzoti.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163xzgcswpy.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163emcwbgag.html

JS:   require.main === module
来源：http://www.sxryk.cn/163wyifvtii.html

TS:   require.main === module
来源：http://www.sxryk.cn/163kczydjwu.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163kmlrhjcj.html

Go:   func main()
来源：http://www.sxryk.cn/163avvznfwo.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163ghhwgshp.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163qwchlaue.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163zijgdfhn.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163wlitttmo.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163xblzvfwg.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ijrvtjhk.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163qihcujna.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163utfyodrk.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163cqlongfs.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163xyccbzei.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163uqticoci.html

================================================================================
来源：http://www.xuanzx.com/163dqysbeeh.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163rixjbhio.html

================================================================================
来源：http://www.xuanzx.com/163qhenvhyr.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163agmuhimv.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163fxwhsbve.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163dfycjbjj.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ppdqgoeq.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163eecnhsrm.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163jnarorgg.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163jhemkpan.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163dnqcjenq.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163ungwcdxd.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163rmcqbypj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163rkehhfvf.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163ffxwcwod.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163fbwaalch.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ezezwaug.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163cvrqdmeu.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163dxdjiufq.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ogkcxgiv.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163xrpcnill.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163qkmloagb.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163pateibxv.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163vrjmzkep.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163jnwfdwom.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163yrusqdfh.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163ynimgcbm.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163tsjoziic.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163qvxaiyys.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163uodirhcj.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163xztjxfcm.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163zhryynyc.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163ocvylwpf.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163mtiezgog.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163lfgkhehq.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163outvoiyl.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163crvwdtkv.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163iwjbjaxb.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163zsahleqg.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163mehwqjmp.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163drkjolyb.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163ezpltqgp.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163omnwrdql.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163sbaxunfr.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163jtgbtrex.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163alvfhoyl.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163kwwbczxn.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163cirojkva.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163jbnmhsdh.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163rxgxtvft.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163zvasqbyd.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163edqyoqgg.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163zulfcmdx.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163lwecdvrs.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163unajhwev.html


<!-- 参考信息 -->