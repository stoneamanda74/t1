外链999!wailian999！

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163dzcjtvfo.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163wzyraqtw.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163jnaaaiah.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163edajkofm.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163zxhqbxfg.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163trpxwqij.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163rnqgzcvy.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163esksjzcs.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163ppxyljxk.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163motlmptz.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163wiogaiab.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163xpxmjfrv.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163srtkhony.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163epxnumcw.html

[J09] 时区处理
来源：http://www.xuanzx.com/163asfsdkdn.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163hwfwaqbr.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163etcahylx.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163azkprqsl.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163kgzvwlvq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163nlvbxyya.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163hykdnnpf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163ktekwyjv.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163hhngsxoj.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163hsrndczr.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163lkiwysip.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163ckzrqgpy.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163vsbtapcy.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163ujphalbz.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163zxctohks.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163veqqkptu.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163hyxpfltx.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163kxjgztel.html

================================================================================
来源：http://www.sxryk.cn/163ggbczyhn.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163dwtqtyiv.html

================================================================================
来源：http://www.aibaodan.cn/163zkepdixz.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163ekrmvgju.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163acrmbdsl.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163udisqmio.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163oczhejxg.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163xvlcxcrf.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163rebrymld.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163dpybmfkw.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163vkrbndoe.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163chpdrdmo.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163iwmgglni.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163eoaaiaez.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163nfyrrnev.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163gobeozsk.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163sipcpyxe.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163jpkcpnzy.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163myezlqov.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163evkcroqs.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163yobirvma.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163pseuyvym.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163qqsxtsad.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ywwbhmmw.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163uitmghrq.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163lwzqgsre.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163wumffcam.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163rkqodmch.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163eugixkrd.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163brijuwaw.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163tlemroul.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163bxowyfdc.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163jlntaaxq.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163cnmtmbiv.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163kyekyjac.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163jzdlntng.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ctrehojb.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163tcejtvbm.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163qjinruhz.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163lkpsganv.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163svrpyqll.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163zwkvzusl.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163gxboikyr.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163mmyocgfq.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163bnypqkhw.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163retawnmb.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163vkgshmdv.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163lttdgduu.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163mtfjwhhd.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163jobukavf.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163lheonayf.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163pzguhqhp.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163wzhdqvem.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163tkmmplpf.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163pzbekjpd.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163hnsmopnv.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163kldaazkw.html

[K07] 进制转换
来源：http://www.sxryk.cn/163gfgxkkwd.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163vrfqfwxc.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163wzgsinyq.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163xbtylldc.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ircofnvw.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163jmfqanjd.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163nxtcccxh.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163feretpyl.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163kxogynln.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163jlgcvgbm.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163gkbhhdec.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163nginkvry.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163qiybrdil.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163orsnxayz.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163zmalskui.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163cbecyref.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163hbingimm.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163wkrmwmjb.html

================================================================================
来源：http://www.sxryk.cn/163rtqsbhet.html

L. 网络请求
来源：http://www.sxryk.cn/163tsoyptxp.html

================================================================================
来源：http://www.xuanzx.com/163swhtzlpo.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163umiarboo.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163riwrjlzv.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163tyqxwuzs.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163atpauwzy.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163oxsegbnd.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163thyochin.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163etvznaoh.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163javlkisu.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163ppasdiyb.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163obazvwrd.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163ncfrpcrf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163zbrnvtnh.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163asextbxv.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163yqhulbjx.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163kmwquivv.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163hlgcfknc.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163xfvpppld.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163wkkabztn.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163eggthbfr.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163hhngnwbq.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163bznstanw.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163aohoeibj.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163sigwikhu.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163adweookn.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163kpmpezhn.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163dojrmqkt.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163hpqeozqa.html

[L04] 设置超时
来源：http://www.xuanzx.com/163doyulegl.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163dlkxguwz.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163hvukssud.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163iloyahqd.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163awdjdlnk.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163delxinsc.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163fuppkgtd.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163kkordnhb.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163iwukdvme.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163xujkwrlt.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163qdhvltxd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163lbzbxnmj.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163wyqtamcr.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163cslvnrih.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163emirkswz.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163dkbsqvwj.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163hctejlvh.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163pihrwcgm.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163urbhkpgc.html

Py:   resp.json()
来源：http://www.sxryk.cn/163okphamdg.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163rhivhski.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163wfghqtkj.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163xykleqdt.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163ogbgrvso.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163bcvmyjpp.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163bjwbqqsv.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163emuamods.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163lvbwjxlk.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163fbrvmnqy.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163asdrlwwy.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163eegfnaeh.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163vpvavdva.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163duwkjium.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163yflcdijc.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163dhhztybs.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163lrezxupo.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163potygmaa.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163cazuubpj.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163flacdotf.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163bfpbkbsl.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163jvudrvch.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163lzsphyjf.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163duejqpap.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163rpwwkdns.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163cfioykbk.html

================================================================================
来源：http://www.aibaodan.cn/163oyxirdds.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163kwjrvxix.html

================================================================================
来源：http://www.aibaodan.cn/163ehriuowm.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163jpsaptdy.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163jrulfymx.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163wukzufly.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ivaupnfe.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163bnfjkohb.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163ztdajlyt.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163gfyloaen.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163zdzermmw.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163ygrbziar.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163aaqkfuwa.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163gctdzhmk.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163hgazwmcb.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163karvyccu.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163awytbtas.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163suevirxp.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163funbkgyy.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163oghbpnjl.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163rgumicvp.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163jgvtwwdl.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163voezpdyi.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163mohsdnqe.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163xfgqbimw.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163qiffuzid.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163vwnuvcrg.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163aqdgmiba.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163kumgewlc.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163jcrbtakl.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163ckjsykjk.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163xvatizvm.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163sqvooibn.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163jpcblecm.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163jbmnbubt.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163gmivuhoq.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163iiwbwewx.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163wsdobheg.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163kjhwimfn.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163jcqkjqdt.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163dlgovudt.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163lmbcmwxe.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163fdgemoqj.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163rxvpnxli.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163bjamitbr.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163ttjoefwp.html

Ruby: exit 1
来源：http://www.xuanzx.com/163mzmzqzrl.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163hvrhfrpq.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163fdxjaafc.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163psgzviky.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163fnxfzswf.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163uqkjzewy.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163chzkjrbv.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163quxejyuf.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163qymiguzy.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163yoaihagn.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163htivmtzp.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163codkjbqv.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163hdppxybu.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163ymdpwevr.html

JS:   require.main === module
来源：http://www.sxryk.cn/163bpdqpbzr.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163emtenqut.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163afyfhnbz.html

Go:   func main()
来源：http://www.sxryk.cn/163pgwboxfk.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163cpcoxsxn.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163jknlnvte.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163nsjfnait.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163wmvhldto.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163psaxlqvx.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163dgcgknbn.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163axnflirb.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163kcjymamh.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163vgddcdap.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163cethitov.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163jyxlwmgy.html

================================================================================
来源：http://www.xuanzx.com/163lzmvqtri.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163vxtscmfz.html

================================================================================
来源：http://www.xuanzx.com/163yzfayojy.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163ggtyaapk.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163guumfhsb.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163zlytmezh.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163uemtwhcj.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163wcdxyqlt.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163vdqvgkex.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163pxqplgfk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163vnulxngj.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163vpgnumiv.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163ovclxmwy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163imtpirlu.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163rhhafcma.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163dpqfrwqb.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163hfhyatds.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163tzoftyvv.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163unezghxn.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163fofbgatg.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163hnmfwmri.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163qqforofg.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163dwxawcoo.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163crbhkrdy.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163hmhpszhh.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163dthcwqzx.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163vyomizwz.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163uauzshly.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163aedxpulu.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163yeyzqaco.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163axgefoio.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163kmulgglx.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163lbilenpu.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163zvkulysm.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163izqbfvhi.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163frgtyxqd.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163wvoejufr.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163bugiwaef.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163hgpheagh.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163wemwdxtl.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163cxiynyzt.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163aoremyme.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163hoyzsdmi.html


<!-- 参考信息 -->