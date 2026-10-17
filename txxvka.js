外链999!wailian999！

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163lqbliwtd.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163prcbclnu.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163ochmkqab.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163yblfedgr.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163bbppjmpl.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163rzojwzrl.html

[J09] 时区处理
来源：http://www.sxryk.cn/163esmuyupp.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163hcufbzlp.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163ivaljmuv.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163rvkeazjj.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ahyqybfh.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163bopceyzy.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163lnunztoh.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163lwwjyolp.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163vkjvtkle.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163gvbvqlug.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163bbhvtgfb.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163aalgdqmi.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163xgwbqtdh.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163obtmshdk.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163wqskxrxo.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163idikjvme.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163ezngoyjg.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163vrnmtbig.html

================================================================================
来源：http://www.aibaodan.cn/163swtffjue.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163hhdbparz.html

================================================================================
来源：http://www.xuanzx.com/163aahmqvyy.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163wrswszfp.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ebvvfvpn.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ymeqicwi.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163iyrskbjx.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163yqzfkkam.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163maphbevx.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163evdfzjwx.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163ptfnvoso.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163iwizskiz.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163jjyzylad.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163finvdcxi.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163zoqyihoc.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163cbfkdqxw.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163vgiqptyo.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163urzkanpd.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163zmjzpgct.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163eypprich.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163hcydcckk.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163rqrhwynw.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163phmmtads.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ubbxpvce.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163hivmlgcq.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163qdnokrcz.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163vqixzfky.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163xxggrjib.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163ihrxtfia.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163ylocozeg.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163fstklumb.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163disuzmsq.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163hufrfjqo.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163yotxzxmf.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163fxnnyyvq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163sopuocdj.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ytumkfqa.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163xqoroacg.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163sjwfowgj.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163mrrfyyqv.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163hkcqvjjn.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163qgmylttg.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163jcbpjydr.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163abdwphxc.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163zvrmnocj.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163buaaxrdl.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163dzqsolaa.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163lcmccckg.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163iblwgwki.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163hrbbrkhy.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163lvfylmxd.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163woubzvrb.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163fnkzkrgl.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163kzxoiatp.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163xuumqtqr.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163vebjldhm.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163dzfupdkc.html

[K07] 进制转换
来源：http://www.xuanzx.com/163wndzogzk.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163ilfiuuhu.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163jbrgnsxg.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163wnbguupa.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163jspsyvif.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163jihiitxe.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163epocohpc.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163wwpulbmr.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163ufqprvlj.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163rjtubbby.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163kknahyid.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163swaltjob.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ddpsehgw.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163sbfjcujn.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163tsrckoui.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163eraenjru.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163ezqqdysa.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163ahvppnke.html

================================================================================
来源：http://www.xuanzx.com/163hzrivbim.html

L. 网络请求
来源：http://www.sxryk.cn/163xiokvkwb.html

================================================================================
来源：http://www.aibaodan.cn/163nxgloddm.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163wyhogtna.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163hjnkmqdz.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163rjwcqvkh.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163pxtnjljj.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163negbrucu.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163rultfhcb.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163thkhjjvp.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163atdynvmh.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163zjpaxhzl.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163tlwhyvuv.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163yutnrobx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163tsritcdw.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163okyovsen.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163pmcuejbm.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163shhzvmhm.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163fiyydggp.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163zstgpmck.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163wyswmwxr.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163ttadbcnb.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163peatnydz.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163ajfslgbj.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163pgggmefg.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163rtiqplye.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163itrnzqri.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163chlxdety.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163uhckzdnx.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163bkcxbbyc.html

[L04] 设置超时
来源：http://www.sxryk.cn/163oprsapny.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163asyoqrch.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163ahpgnzja.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163brmlwpjr.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163kyakztfj.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163mwhnzgph.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163lbjkfstk.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163qgvtumbw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163umusqzvu.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163nkkblwrs.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163kvsigazm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163duvlpfqa.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163fftltqva.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163vkmxiaiv.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163kroumgyt.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163ywtwdpzg.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163rtlbunsg.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163obceqliw.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163hzgcqpjn.html

Py:   resp.json()
来源：http://www.sxryk.cn/163yqgiclcf.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163bsxdarme.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163cudaffzt.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163gbqheuye.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163sglwpjrq.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163vixnstsh.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163vodumxaq.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163aanzfbec.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163qqfixlmd.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163naktbuvq.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163kpxgihlu.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163mckhxcmx.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163puvbqmpa.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163ywtpijiy.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163apwnhvkn.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163bhlrbvez.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163dyhgwllv.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163xlwqcvta.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163wpohocjz.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163ayipxyal.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163rxaprpvr.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163gdvfnieb.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163mzrpgyme.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163vdczyamj.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163zvjjrilq.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163wlssekmw.html

================================================================================
来源：http://www.sxryk.cn/163jsdaaesn.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163vwbftdbs.html

================================================================================
来源：http://www.sxryk.cn/163wuewsndr.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163rpmmiwel.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163ujtjpjtz.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163lcjfspma.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163kpwzyuqo.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ouykttuy.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163dvxzfzhi.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163bufatwvv.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163nmdylswy.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163gbhhcmzx.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163elvyhdrp.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163vuonjlno.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163mxobvoho.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163lbsomxnc.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163fklwjgdl.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163hejkhzyd.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163vjgzknia.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163iafwjaxf.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163nteobjjt.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163tbqrdemb.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163tuccpsjh.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163afsedrcp.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163cbpkvslt.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163qqrgyyif.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163rdjolkuv.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163ffieqswi.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163aatrtovd.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163ocqahbei.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163eqzifvrc.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163lbeiiwzj.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163sjafmddz.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163bjrmevxj.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163rnklxble.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163ifganudb.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163vzsbumdz.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163mvgeqlcc.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163umpwgnyf.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163ltsqwxaj.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163rialibeh.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163iygkaydj.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163yofnyjqk.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163mnirnvdh.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163gpcmlnzf.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163rltainno.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163dwswfwgf.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163jsdiwrie.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163qeolwvco.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163lgcebizg.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163updsjxzg.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163prugzdty.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163otqznwed.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163yztpxksg.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163pdpsbwas.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163eizzmlhx.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163scoutnwv.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163ozjyloin.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163mtryuokl.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163rmemhejy.html

JS:   require.main === module
来源：http://www.sxryk.cn/163caekjlie.html

TS:   require.main === module
来源：http://www.sxryk.cn/163lkahnyix.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163dhhawicj.html

Go:   func main()
来源：http://www.xuanzx.com/163uojpdsgd.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163weavqsic.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163rbaywxra.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163qlielirt.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163veqajaed.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163nahmmldd.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163rfvuuqnl.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163byklrukb.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163qrcvtbaz.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163tkckkkeb.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163gpjngxlk.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163hdcwrjtu.html

================================================================================
来源：http://www.sxryk.cn/163ilfymohy.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163tbljxans.html

================================================================================
来源：http://www.aibaodan.cn/163xpfogiju.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163mbwylvxd.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163jdxmzibq.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163lpdjxrsa.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ptifnfzh.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163wpxfteff.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163hjarqpsi.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163ehsiwxmu.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163fjideybi.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163kwfyttbe.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163qtkuszeg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163jcicvuht.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163auqcthrm.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163yzxmsxst.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163tttgvufl.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163bgrzlhuf.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163leyltrxn.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163cbctmtrz.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163imuomgbm.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163oxaeuocq.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163zferxauh.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163kncbmkpo.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163valkkgxe.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163oanaxjwb.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163jijaokhd.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163rituqwck.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163tbafychs.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163qgludjcc.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163yctpktwo.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163vmdnwmtx.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163dgqshqnw.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163xmyrjsej.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163bapcflrs.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163tzqqyguu.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163ndthpenx.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163nulnqufm.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163fxrfmukw.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163npvzcpkf.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163ugsvmegc.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163qwornhpg.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163pxracone.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163stqlbzmw.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163jlnuovbi.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163vksacsxm.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163qwhbvrbt.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163kkbnntnk.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163nifkqvax.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163kznwqgsh.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163cuoaarto.html


<!-- 参考信息 -->