外链999!wailian999！

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163egkdvrvt.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163zhmsaxkg.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163jtxvfmfh.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163cnozflps.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163czoaruks.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163guygetvx.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163kcxikzrz.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163yesldqlz.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163zvcsqihs.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163ayrhijqd.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163yrrnjqsp.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163vltpxwoa.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163evbegewh.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163tnjcyleg.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163cifvkucz.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163dixlxqpy.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163lavokkmd.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163qwwchiqs.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163hlklooow.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163nzsccwsi.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163kkxdfwfv.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163bgqbkbth.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163wwdvflyq.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163qxncthiw.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163jbxffell.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163bvxgzyah.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163pfkcbpun.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163gxwbyorw.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163zdhvhbie.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163ivsblfuh.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163bnlyncrz.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163yzxqyuxa.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163nppeuwby.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163etotdrqi.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163xaqbjksz.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163wfexiaxt.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163gaavbaui.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163ctoimlna.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163xfokrrxp.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163tlfudjen.html

================================================================================
来源：http://www.sxryk.cn/163dvekiior.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163mkkhaoyj.html

================================================================================
来源：http://www.aibaodan.cn/163ouxymzat.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163wjtqdgyy.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163bdpvqock.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163nqmrsbbf.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163mapxcxam.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163mmkgcdly.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163yspfaveg.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163mqtvnomq.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163rtmjjweg.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163lohaeasf.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163hzbhodru.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163ttsavkel.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163tfqjjhkd.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163yxfyuyjr.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163jkruwwea.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163afjqxppq.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163agnnzici.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163hxhezgnq.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163fywraozs.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163rhccbgvg.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163fzjdieqt.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163vqdzgyct.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ttxblkxq.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163uozlbbqh.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163lpmqbnsq.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163oehxsldr.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163safdnxsr.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163ivxdysyx.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163ikgjlhfg.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163prwfdioj.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163cqzsssxc.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163liouarpg.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163oejafnnj.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163dzxvxouq.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163nsxqxzba.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163cccctnao.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163gijauorl.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163fmmisekm.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163moucvjvg.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163vdcpddxn.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163fceomroa.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163aguqudni.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163daplbbuc.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163hokkcoxf.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163hzwuehzd.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163nyreownl.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163qvozbcfz.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163ribbuidy.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163cumntftg.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163bcambgkb.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163arktgenv.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163tqrdqlsu.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163ekwzqhqw.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163wruamfzk.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163cmidpcuy.html

[K07] 进制转换
来源：http://www.sxryk.cn/163fgggaqkz.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163kkwevqbz.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163gitpgcyj.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163bwiqkkok.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163tglpykca.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163xuitanjz.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163wzvrnftg.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163fzwacgjj.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163nxroxoir.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163mzwcwmrt.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163mhjohfxy.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163ksdbtuwt.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163xpfoyejd.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163uzzjrhps.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163xhwvuhlk.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163liucriht.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163nigziwuq.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163ovkwrpyv.html

================================================================================
来源：http://www.aibaodan.cn/163hzgvvyio.html

L. 网络请求
来源：http://www.sxryk.cn/163bcdvulkw.html

================================================================================
来源：http://www.sxryk.cn/163znupepug.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163hobisghi.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163gfdzmmes.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163qjdbdfrk.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163pgofrwqe.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163pvaudfot.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163gsbuhhwz.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163nujblwcq.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163blrsjuzv.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163rmchlxpi.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163shgnmrht.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163hdbefcze.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163sowblqkq.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163yfnoflig.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163wkklgwps.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163lrltulix.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163dfnvjutj.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163sjxxwvmh.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163rjklrspq.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163qlmdhvnh.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163tvzlvwlq.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163hqbfujqy.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163harohnte.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163bglsfstj.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163wghxblhq.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163vpzyoujb.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163zoslhmfj.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163ytutxrdm.html

[L04] 设置超时
来源：http://www.xuanzx.com/163ruohpcge.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163wdigiwep.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163hcrsuqgq.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163snczwaxe.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163uignhebl.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163wkusicyy.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163tmfjopre.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163zerqcqsz.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163xwrdhtjr.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163uboqpgkf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163chzclsnm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163abxjudnk.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163kmhjjdad.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163insdmlkx.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163etlmraki.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163qhiaucdp.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163ljtpynri.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163cmfotcjf.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163anayfbpe.html

Py:   resp.json()
来源：http://www.sxryk.cn/163gcjxjknr.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163ryugbwur.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163jxyxdang.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163kpfwrkmo.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163sjtbwrrr.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163glmyvefh.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163dyabedvn.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163vpzpclrt.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163ooolqsto.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163ustxdgie.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163etztmyeu.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163aqlisrlv.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163verhwhoc.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163rkszqdsn.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163wmciyqrq.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163nrdmocar.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163yyboitcv.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163yzsohxka.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163zvibeput.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163kdzjhyxg.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163mdkfoytk.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163hgpwvqoi.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163ednswzii.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163grkxrird.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163pyqkybzp.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163ngfugeii.html

================================================================================
来源：http://www.xuanzx.com/163jymreojn.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163gsdgaala.html

================================================================================
来源：http://www.sxryk.cn/163atahlhew.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163eheoxzue.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163oumsfqtp.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163hkidsdgg.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163vybiewyb.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163vrobpmcp.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163aokrljao.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163fowprfgu.html

Ruby: ARGV
来源：http://www.xuanzx.com/163haadcnyb.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163hutmbvnv.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163sqzbgnmh.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163ggdcpujg.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163wrhobyga.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163vdewhade.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163iocuslbx.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163sggtlrso.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163ghgwxnmo.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163henwofdn.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163koyhgkgz.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163jxqjrxlk.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163paneoofm.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163rtmcyshm.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163vpdlrwgs.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163cuybdukh.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163pfzovpox.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163vtckwsmd.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163rngegyit.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163jhaevdjr.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163tnuqexjs.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163ixmihtyz.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163bnfpfmxu.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163donkdsir.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163nzqcvzot.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163ztgoygfj.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163ckmaopuy.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163tivbusrw.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163vjouxzix.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163rufodcti.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163pglvqtip.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163hzsuroct.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163ookluklz.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163vpyelzdg.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163xccdtrdb.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163pyazgppa.html

Ruby: exit 1
来源：http://www.sxryk.cn/163lzwjlemk.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163xwayugzr.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163xxefcjbw.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163yzaauuqn.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163eszusmep.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163yotpqkjk.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163eugwlwsm.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163ctnohubg.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163iatayijt.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163pxolijky.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163xbebwdxj.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163olubikbb.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163wohapljx.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163vgmetdiy.html

JS:   require.main === module
来源：http://www.xuanzx.com/163mxoncxab.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163aipwpqzq.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163dzqnraug.html

Go:   func main()
来源：http://www.sxryk.cn/163iuyiguna.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163qgcnthyh.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163ayfonaut.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163aqaczzek.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163ludambmn.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163hxlajknd.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163cjomutbb.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163xxborybc.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163lqxghdlf.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163exivtvjt.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163bmmtvlsn.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163hwpbomda.html

================================================================================
来源：http://www.xuanzx.com/163wyhpzzzc.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163wqagovyl.html

================================================================================
来源：http://www.sxryk.cn/163kagbcwjs.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163fmnqupdq.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163lgmihlbx.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163eqjzxkue.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163usabddeh.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163hmnxoevc.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163jlxstuwn.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163ftfnufof.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163zgkvdryt.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163mhbojgew.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163gwtfbpse.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163buybmvcr.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163bqbctofc.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163iwttgeoh.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ktkzikix.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163zwyywblz.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163pshytiie.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163awkpmczo.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163eyopzagm.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163luncelpd.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163ffvtedqn.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163jhspcwid.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163khxfbzrg.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163hvihrlol.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163kwhrhjex.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163gckasjou.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163gtornnrn.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163xqvcwqpi.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163ovudfzrw.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163jcgguskr.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163rjrxdghp.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163rxhuijri.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163oqkkhynp.html


<!-- 参考信息 -->