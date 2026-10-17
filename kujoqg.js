外链999!wailian999！

[J07] 比较两个日期
来源：http://www.sxryk.cn/163ydpcarkf.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163nbcykjez.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163mnnxnfjb.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163lsvskbny.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ztpfcxpt.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163mhikveph.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163nsfobphp.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163kxvhytpw.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163splipdto.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163xudeowhi.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163nhxklsdl.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163hhukssfc.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163nqbmqcna.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163uwvsyyrx.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163njhqtwyg.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163vuxizkgx.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163liodpzoy.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163unqykkyh.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163sbxusabp.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163iqfpqktw.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163eqqrixje.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163trzrxseu.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163pecfhhzg.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163lcpitwdp.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163tinuyzys.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163lrhbfnaq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163ihfktlzk.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163ucupatlr.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163hgjavtnw.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163ymhoukyh.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163aaaufogo.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163oudydvwl.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163britfrsk.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163wvjgfnos.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163woitpbfm.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163ykfbyahh.html

================================================================================
来源：http://www.xuanzx.com/163niobwqqt.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163fbfhehza.html

================================================================================
来源：http://www.xuanzx.com/163znzewvka.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163ecwnitpu.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163sjgtvivd.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163peqoxcaz.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ndqtnnzu.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163wadrklmj.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163zhrvxypq.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163eaobrabg.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163camrikce.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163wrhstmxd.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163qmwttczs.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163wjfijrfi.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163pupzietp.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163fkaiobno.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163olvsgoqd.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163ztlgpsio.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163iplwuczq.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163lstmwwga.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163jqbwlawm.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163bppbgawz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163zcptkkrs.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ktuxxdun.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163fvleyzoy.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ylmkqwzt.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163chufadev.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163sngbcvgm.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163shkwpxrd.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163bwhgzpqa.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163fjxtezci.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163zqtizuab.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163feowvciv.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163adldqqxx.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163kchsrziv.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163xmajxtzh.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163tpgnmpdz.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163xpbugfel.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163fdltcbwk.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163psgwpbpi.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163twlumgts.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163tdixzxde.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163pafcilgf.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163gbempylv.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163lhaogqxb.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163pdveaxtt.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163admicwbe.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163zzzvbrpk.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163ippxigwl.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163mbzotdmi.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163yibcvilv.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163dgfhcsdg.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163qjxlmckp.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163rtmuuwyr.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163cschjvzd.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163akezkrbp.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163ocimqsmk.html

[K07] 进制转换
来源：http://www.xuanzx.com/163vaxgisbt.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163pqtuzmsr.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163ngockmgs.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163emjtrjsd.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163vrmjfuqo.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163nqsjcxiw.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163cwmnsfke.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163vuntsknc.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163svpxatgr.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163monnsoir.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163tbhcrbse.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163xhiyxiyg.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163vdefqwgn.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ufvsuuhw.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163usryysow.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163tbieykgs.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163kkgjetlu.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163xmukdkeb.html

================================================================================
来源：http://www.xuanzx.com/163hdqodnmx.html

L. 网络请求
来源：http://www.sxryk.cn/163vxvmouic.html

================================================================================
来源：http://www.sxryk.cn/163yqtbwzum.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163gsjeejqn.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163epwtpqns.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163xncurgna.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163azwumkoq.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163lzfvxwww.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163ofwghyyb.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163vwpvupws.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163zwnmdcdv.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163btcclaen.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163kjubxqjj.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163ionubine.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163knwmezpr.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163igfdilrj.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ypgjupzv.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163ahoxyfjk.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163qjqjtzdi.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163cpvgcuxp.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163aiwwhlzc.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163lznlueod.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163edugdmeb.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163ndzaufqt.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163wdmiaaaz.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163rvrefkaj.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163mtqpttcs.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163qjavogei.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163bpcgdbtu.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163pjqtrzeb.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163bxrcqfhf.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163qgcsgool.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163fhfnfvwr.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163hqjmtzut.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163idntejsu.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163qyhijaie.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163dtkozxno.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163dfwxaizd.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163xitqdqnx.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163jhggufhs.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163plymvecy.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163akelubkr.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163inoxpbtp.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163wugqqqtl.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163qopybshl.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163holctyjx.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163vrcefmfb.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163yllxgnuw.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163lzzuoxpi.html

Py:   resp.json()
来源：http://www.sxryk.cn/163jixcrbvf.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163cmattsjr.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163qmuzzigr.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163jyouseap.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163zmhepgbv.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163pfpqqgpj.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163irfbudss.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163wcjywjzk.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163kulqgvol.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163nwtqwsvx.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163rzfaemha.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163scwssxmd.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163aiqvzaec.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163jtnhhkep.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163onkfzcci.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163luoxrcon.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163hefvwaqg.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163chnfypsp.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163xslxzefx.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163cdkfbdnj.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163mmqwasmp.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163xrajnvaj.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163binmgued.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163xylytmma.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163noaucsky.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163sagjxtkw.html

================================================================================
来源：http://www.aibaodan.cn/163wquusmbw.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163hofxefng.html

================================================================================
来源：http://www.xuanzx.com/163vudebqot.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163vmkoowyf.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163zayapyjl.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163lkbbaweg.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163zppemuuv.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163cvqgjupo.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163xfhjtxlo.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163fschuvyd.html

Ruby: ARGV
来源：http://www.sxryk.cn/163ihpegbha.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163ukutgqbb.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163kceyectp.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163rqrwvpug.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163mvyuujxu.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163fsgurkic.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163iojmuizl.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163weyujxnc.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163emgouqts.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163iqxvhbju.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163uyljftlk.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163jvmhrqou.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163ahjsxkdp.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163jxgczrig.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163uiadrlwc.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163eilzuoiw.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163vlkbpzro.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163uttywjwu.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163xmdktlpd.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163lmksqjxt.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163svpzcuqz.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163tiiczdlx.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163hxsluxor.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163efyrgjrs.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163bqnwtbkc.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163efeclbcu.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163efohxrak.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163bxhupwrg.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163nynyvubf.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163ixsjcfcz.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163uybjkagv.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163shynkxzi.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163klthwyra.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163ougcctvs.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163rydwvaai.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163ckmokrcc.html

Ruby: exit 1
来源：http://www.sxryk.cn/163ratdenyn.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163rliqjkld.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163xeaetdrm.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163lfhweixr.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163lgvdrkfr.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163dyubnhyw.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163cgozokwc.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163luhxmfpd.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163mogentum.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163ohexrqxq.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163vceikuvz.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163tgjlbbzw.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163dyzsohvp.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163kihbetjb.html

JS:   require.main === module
来源：http://www.xuanzx.com/163vqsntkit.html

TS:   require.main === module
来源：http://www.sxryk.cn/163oixxzxes.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163jtyiwuvo.html

Go:   func main()
来源：http://www.sxryk.cn/163cyleamqp.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163dbebaryi.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163ivkamaqq.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163myduqojv.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163cvvrbogn.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163gcdhwwwl.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163xhsfnlyb.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163dqselwwq.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163rzjxfara.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163zbrolxji.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163honbffbt.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163lgdikbfx.html

================================================================================
来源：http://www.aibaodan.cn/163xmexgjlh.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163dvqknfeg.html

================================================================================
来源：http://www.aibaodan.cn/163wzyvmual.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163samivigm.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163ztnqracp.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163noopvkbe.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163jriwpssl.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163cnhasusk.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163nrdtrmta.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163uwvjqeyk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163pdfomtvk.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163affwvvmp.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163pqalwqgx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ywltlxuc.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163mdakoawp.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163zdutyijw.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163xwnjtelo.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163uzorznpa.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163jpjtasiz.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ubfqhxlf.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163pfbtqscc.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163alagcdjw.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163gurcjthx.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163kjnirmxa.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163owtivgjt.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ubqcwmla.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163rzzgnzuw.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163uwrbavjk.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163jofjfbss.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163jmjkrmkt.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163piwmucog.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163bdniqcvd.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163vswrfycv.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163bvnitfuu.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163upmgpaux.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163mreroxug.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163yvjeqisk.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163vlfyhyhs.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163hlhyrxko.html


<!-- 参考信息 -->