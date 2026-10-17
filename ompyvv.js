外链999!wailian999！

Go:   time.Now()
来源：http://www.sxryk.cn/163bugkfbkk.html

Ruby: Time.now
来源：http://www.xuanzx.com/163fkegtlfq.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163tonaaiig.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163wnmsysxh.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163paehobfz.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163varydncd.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163qylrkovk.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163zrkttgal.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163mielhejo.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163ugiyevdt.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163odpwyrim.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163eittoylc.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163gayjvufx.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163asxddodv.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163cottaoyn.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163emksgrye.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163wkrejsae.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163ymbanovi.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163fcxfwkjj.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163xrkwflqv.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163jrutvrhl.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163sxflyuwm.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163gjzbeohk.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163axmnvseo.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163stmcpemm.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163pwjnjttl.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163bujhlfra.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163jzdqazfp.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163rteehqdw.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163lyiyoglc.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163ervexxjp.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163ntazamii.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163alwgwidc.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163qfkpjwmu.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ovadvqmn.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163vtwpabpj.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163ydthsgkr.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163xscfrpel.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163dmrzande.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163wsyqjgzt.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163kruthmce.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163seeaicha.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163cqkrigam.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163zlwedxbj.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163cqbqboed.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163taglvktz.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163agyrqqfu.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163ctffdsab.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163tygclbpo.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163iyfzgksf.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163zjekchuo.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163sqblxcow.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163rcfqicfx.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163kmairoje.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163fdhocwcs.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163cpyhschd.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163xajwsgwk.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163gesxhqqe.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163qksohgiy.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163cocflicr.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163xewcaxyl.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163kaivdkqm.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163ttjfyprm.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163rjnvnkxo.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163igxdghpp.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163qulsuvpx.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163qwmvvtts.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163auaqdjku.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163wyqkpffz.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163uxpxbrxy.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163fbbhdeoj.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163pfjhreer.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163myacogkt.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163hgkyrrdr.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163cbljllio.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163btussfhp.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163knwiamwk.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163ujuzzvge.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163lxzhlbnp.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163dkphawpe.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163tjdqdxbp.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163wmaxxjhi.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163ziifiase.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163ucovpadc.html

================================================================================
来源：http://www.sxryk.cn/163nczdekey.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163lprozvxm.html

================================================================================
来源：http://www.xuanzx.com/163zpbtfdcs.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163hionkntk.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163rehtklat.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ktgmakds.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163kvqfzcns.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163hizkdcjh.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163jkjttghz.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163apqffkgf.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163nxklacdz.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163mxixxfnd.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163uhjszzrl.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163emkfgaov.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163kvqzprfe.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163tiltfzpu.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163xvujvpfv.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163qpktgfhq.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163cbieojzd.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163uihypnrj.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163tkzxfkrt.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163vsdimvoc.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163pwbafsng.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163adzbvhew.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163oandvbho.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163atqkhjju.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163dtmmseow.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163woelakgh.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163nvxivcyw.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163xdpfrzjq.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163czijolal.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163toxjdwwx.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163zbfiuuxs.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163deskogvi.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163fivjrpcs.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163ojuipezi.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163enskcswe.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163rwtdveou.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163myckdjyb.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163vdzikjpx.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163drsbkuur.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163makgkdlv.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163pkfifdne.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163xnvnuxqc.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163xjrytzuf.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163ecgsqaay.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163bjrbruyz.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163qprilfgd.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163eeoayriq.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163jxcabnko.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163vqrtwtsl.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163oeowqhax.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163vxpjmgvh.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163zytecrir.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163gqsohezv.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163zpcmnppc.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163hxoagcdj.html

[K07] 进制转换
来源：http://www.sxryk.cn/163amgdscif.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163qgwtndpu.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163wwvcxjac.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163hlzzjjid.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163tewntato.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163bhujgtzy.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163wnyrllrl.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163fjpywpsx.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163mfoymygg.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163wkwrrvcc.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163dkckjkoc.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163qazilshl.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163myabxzbl.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163fislkmat.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163ltjfzlbg.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163msmzlbzj.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163wdnebjpg.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163mhrkbpwc.html

================================================================================
来源：http://www.aibaodan.cn/163cfzyceek.html

L. 网络请求
来源：http://www.xuanzx.com/163whjwhslm.html

================================================================================
来源：http://www.aibaodan.cn/163itdjnozb.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163hasftzdh.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163wtjechvz.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163pqvlbhlk.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163qijduewd.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163ujpwdyib.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163ibtcbhfz.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163khukjdhz.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163zcnvcxzb.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163cpxydewl.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163cbdmnbus.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163dplyjalb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163cpzsyrxl.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163spvpdnjk.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163idodejes.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163zgjojjcu.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163vnhgzfeu.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163izewjfvk.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163fppdvgsg.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163jrzjceim.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163hnyiaspt.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163jfcwffmk.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ksgzvmda.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163kpblzlum.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163qdlhjubl.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163nqyhglcg.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163ydvuvtjr.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163avjulepk.html

[L04] 设置超时
来源：http://www.xuanzx.com/163acnesabq.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163eeeykffc.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163ihpramlg.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163gpzhotfx.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163bkgbjjho.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163wkoibnmt.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163fvbgzxlz.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163ucmnnshw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163desaydam.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163jnjsunkg.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163asqkficl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163naqgaxyi.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163dydkofws.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ersjqzpk.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163xbdsgahs.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163wrrsqlvx.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163nvjxidfh.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163pxgnnuwu.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163xvufxewx.html

Py:   resp.json()
来源：http://www.xuanzx.com/163qvuxoyxt.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163povxjoid.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163illegncb.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163igxsdiwn.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163aruzoomo.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163iuzfnhux.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163idsjczla.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163lsrbrhta.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163gowtsaaf.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163gwustvap.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163tbyoqmap.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163avgqbhnr.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ifjxuxco.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163bwqbgjgq.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163kncscbzr.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163mkfddjav.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163cxvrwosk.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163gvnswijb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163adylrzxy.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163sujoclbv.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163bcnwmttw.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163yilrfumy.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163aqatmemd.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163qrzjaebu.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163bxlimzks.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163cardtsjz.html

================================================================================
来源：http://www.aibaodan.cn/163ucfzzsif.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163mtrkksqp.html

================================================================================
来源：http://www.aibaodan.cn/163fyyscmiy.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163mfifkcjf.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163atchpupy.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163ytcvcjhz.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163yqgmlmjb.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163iszljjfb.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163fejudwdz.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163pwgktnxo.html

Ruby: ARGV
来源：http://www.sxryk.cn/163jsfricws.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163fsfnlwvu.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163gvytrykw.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163nqlhnare.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163kopaggyh.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163pvmzoiko.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163tvgchgqy.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163idgcanlt.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163uoikjlqc.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163scwfxdfq.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163ntyleyez.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163znrgodkv.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163ekvmconf.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163qjmbfjwa.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163aerwghbj.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163rfelhbln.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163wtvxngqo.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163pvbkpdxp.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163kjonebtf.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163gameclrq.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163csivvtkq.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163ffuttukn.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163fyagviml.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163mhajfwnj.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163cxtcdxfq.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163qrdlzxdx.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163qpvzpdbt.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163gdwxgcpb.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163myxoajid.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163iwidvkxc.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163cawqyyka.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163mbyrgfsu.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163mcocxfcs.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163xbxoajce.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163zqdynozh.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163lgevxbku.html

Ruby: exit 1
来源：http://www.sxryk.cn/163dyknefgw.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163qrmbtgbk.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163dkbctbpm.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163zuuskect.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163rqzboawo.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163wpbllcrz.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163ohsyegqf.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163yeommhrw.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163bfibytyr.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163xinblxlh.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163hiabctbf.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163kscoqany.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163lgcdosao.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163dwmxqxla.html

JS:   require.main === module
来源：http://www.xuanzx.com/163nwmkcotu.html

TS:   require.main === module
来源：http://www.xuanzx.com/163anmhlloi.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163otwqtpcq.html

Go:   func main()
来源：http://www.xuanzx.com/163osfkwsxi.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163xhzfnxpt.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163pifbayux.html


<!-- 参考信息 -->