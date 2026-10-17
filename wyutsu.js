外链999!wailian999！

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163fvngegdk.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163aklczsgh.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163snpbzhbf.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163wadvdntd.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163ovfqosfz.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163xykxpjob.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163dtftyhfn.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163emfdloqe.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163plwsvwtm.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163zueytwnu.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163joofrwuu.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163eeyovgmy.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163sravsseh.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163byhwqysl.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163vksihfbv.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163slzncxts.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163iigwuaqu.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163yegnbahg.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163mokjbsqg.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163tsosfmzh.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163qjcacavs.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163crdihvvc.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163wuliddfw.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163kbukuiyk.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163atdvzpqm.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ignsqzpx.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163uajvleuj.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163inituiqv.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163aqloslzb.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163jrkrtblw.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163lztolcsu.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163etrlgzom.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163yfhfxuik.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163pobqlrat.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163whtrvbrm.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163wdqsjaol.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163tsqgckmg.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163vkkcrikl.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163bhewqgod.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163gmiygvly.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163bapngpyy.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163nwkiygdr.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163paaclyzt.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163epthapll.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163xtcxpatm.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163hjhjywnc.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163dsgulawe.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163ikespqfj.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163ddtjjbko.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163ccmzzmdo.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163yfnphltl.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163cfjegipp.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163quveefrz.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163okovnobo.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163gvpxryrk.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163jgijwboo.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163epsrpqtw.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163mekigmrb.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163dsqkfrng.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163rycvgdro.html

================================================================================
来源：http://www.aibaodan.cn/163niarprkk.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163kxanwzpr.html

================================================================================
来源：http://www.xuanzx.com/163bgfcebxx.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163kikktdcg.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163slskvxkv.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163halxzagz.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163rrzxhidm.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ndskqxac.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163jxssucpr.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163fjssmbhr.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163iwuhzaxe.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163xwtfxeqw.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163stvxpbbi.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163bpfhrkmj.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163nhatpsai.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163nmpgflsd.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163bvnvwbje.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163tbyvilbn.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163srrubnep.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163xnqibyet.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163jxcdfvhh.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163zighfxzw.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163freleoyx.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ulasukcg.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163xbhqdovb.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163nhrgzhjf.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163emcsjugr.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163sptgewdn.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163ovjkmnaz.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163kywvslvc.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163kgimzeqs.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163yadsyphw.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163nzccqayd.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163rygjphky.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163kbzmirjj.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163qkdszrjp.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163bahubddf.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163cnmzvnph.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163qryzkvzu.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163rjirmckm.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163oukttohb.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163arqpdoym.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163mhhozhiz.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163brfxixqk.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163jjpzkotz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163ewyldayd.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163rhnwnfcr.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163sdyarrxw.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163jesahvbm.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163skpwjdps.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163yfrfzrpq.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163wqdvlttg.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163clyfwklg.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163gdwpektw.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163eakkfqjq.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163gzgaccjq.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163ljjvzbjp.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163pyapxuli.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163suwsierg.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163fnvznwew.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163yujnctyp.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163wtjnkweb.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163lowsfvpq.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163lovenotx.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163jefwzuii.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163rtlparak.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163vjcrfhpx.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163njivwlgo.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163adigzrhq.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ydhvswpi.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ktncbpax.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163monmipbx.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163gpsmaqrq.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163ecbfgbqg.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163lzkozadf.html

================================================================================
来源：http://www.aibaodan.cn/163mexujhqq.html

L. 网络请求
来源：http://www.sxryk.cn/163tehmslav.html

================================================================================
来源：http://www.aibaodan.cn/163odrvuxvw.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163stgitbtz.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163hcwwbjft.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163ekmjhsuz.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163oklpgmji.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163svkhcemk.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163wiqnulwz.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163lyrkiwwe.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163nfdorkmg.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163fdjdrpdq.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163uubjhxqh.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163pydeynuj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163ysrlbtvm.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163zhdaeprx.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163wrhxhdta.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163rytdktuc.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163auekyfnx.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163kdippngp.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163gdabzqlu.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163xgdkuxqy.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163ofnluzek.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163kblflvch.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163bxdfyugp.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163taebcbti.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163hxpcfcmn.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163ggdgnzyz.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163fczrvctw.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163rcsicyhk.html

[L04] 设置超时
来源：http://www.sxryk.cn/163ycbaqjrm.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163mzfboshh.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163zlwudxuy.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ugifdzqu.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163dfolktmo.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163dinmigwg.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163mielvkhc.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163xwmctbbr.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163lmtvebgm.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163arsiiqrf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163hjxlmcmm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163mcamsmfy.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163xlhtqfvg.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163pdrszggs.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163qgyrlnsh.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163tbmivpqc.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163emxrnesm.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163pqeipxbs.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163agamcybj.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163canceewi.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163jawehzvg.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163kdzqiqad.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163khhqytrm.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163uyazmyvr.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163befgxiav.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163bmfghsyz.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163vwgwsviv.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163pjmewobt.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163parawjis.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163fjantrji.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ejzvkfnq.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163uhdbbykk.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163vjkjivgr.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163rfsakjuf.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163xkztaimq.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163kptfqzxr.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163npucovsj.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163kiyzsaoh.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163cdkhvvvd.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163angeoqgw.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163gfrtlngh.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163bppapyfc.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163ofaopzvz.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163ipilmmby.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163gldojyht.html

================================================================================
来源：http://www.sxryk.cn/163hqkvdzqg.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163icnuiryy.html

================================================================================
来源：http://www.sxryk.cn/163qgnbrotu.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163eikxaiam.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163mhucivsa.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163jzrankcr.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163mqtwarwj.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163hxtxrsdh.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163mlcxwitl.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163ibunsxnp.html

Ruby: ARGV
来源：http://www.xuanzx.com/163igrdvmek.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163gymenule.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163zmtqsebw.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163hxcpssix.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163kfthcqyk.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163xtzaitas.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163owtiienz.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163emhmbklg.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163ytkceiir.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163pgxgjxdp.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163cwuahiuh.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163djbljxgk.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163skmaxejs.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163fiylnvtf.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163jlylebie.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163mbssvsnt.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163sdomjxac.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163ipaavwjv.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163ltllajpy.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163wrczmqgn.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163byhzazfx.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163jybhotyo.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163kmqwriok.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163cruytklb.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163fystqteu.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163eqcsjknh.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163kgvgzwwh.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163pbvqvfre.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163kualrvep.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163qabzhvxj.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163tbhmzndw.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163xhkongog.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163radhgrcz.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163hqglzwar.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163afmdjpqq.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163fogmsvoq.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163qhxnqmcx.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163cffsgpzh.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163hplmyeeq.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163mcrpcswi.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163swxlitwt.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163uznrqbit.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163nnssvsbv.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163rsxxuedq.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163lfuktioj.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163ztqwmypc.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163syzewlcg.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163xfxpdhur.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163msyvvdcu.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163ejpvmhxr.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163owywmkxd.html

TS:   require.main === module
来源：http://www.sxryk.cn/163bsmfgqxt.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163gitjfrih.html

Go:   func main()
来源：http://www.aibaodan.cn/163gnfxrhle.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163iukjjvpa.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163ypmrbwfc.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163zhewrijp.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163icybiomf.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163qxxrdpoe.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163hoiserxj.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163gqdqxbcl.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163klirpdim.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163nmsyccnm.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163wvimmosy.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163rsozodcl.html

================================================================================
来源：http://www.sxryk.cn/163kkhaovjz.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163nlnkxmwn.html

================================================================================
来源：http://www.sxryk.cn/163houzjxwx.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163gnqsqpcq.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163snbpojyr.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163ftzdatwk.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163yqtttkbp.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163pjzpziux.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163ecgsyuxm.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163mdtcemsv.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163obadkxxy.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163tmijoafm.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163dawviltx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163wxbkdqtr.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163wzbcqlrc.html


<!-- 参考信息 -->