外链999!wailian999！

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163iygzdeze.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163czedfojv.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163eotkmzxq.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163jtdgawhm.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163ssuvcscr.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163tdjnxpnc.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163rwttzttr.html

================================================================================
来源：http://www.sxryk.cn/163xrqmlary.html

J. 日期与时间
来源：http://www.sxryk.cn/163fmtnbeyb.html

================================================================================
来源：http://www.sxryk.cn/163hkpwrmfc.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163lfzsucbw.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163dctqiopz.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163obbbpimp.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163rcldrers.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163umpyjqmm.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163burhkzfs.html

Go:   time.Now()
来源：http://www.xuanzx.com/163dtvixghc.html

Ruby: Time.now
来源：http://www.xuanzx.com/163tbvomglv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163ohwfldpw.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163aipeeyzn.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163qgjbckgm.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163pxfdujew.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163ayszltrs.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163yfhefabx.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163nxhdgrnh.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163gibhwthq.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163qhbbluui.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163xwkesngf.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163vzhnkolf.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163pkwselol.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163tdugtjbz.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163zewazhqh.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163aqrmjfsi.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163eqqjatcw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163gysbsoof.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163wsxxgjgy.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163qyshdmrc.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163kzgcmdkm.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163vbfdpyfp.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163pobrvcfc.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163halnmrjg.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163hvzvohfa.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163ozqlqepo.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163hnphaiuk.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163rptxpqif.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163fqyezmiw.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163dvbbpisu.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163zxyripwi.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163hgyoeepj.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163hslqcmbn.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163kihdvfbw.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163iiptwcya.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163mxpjglxm.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163niwkzoaw.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163iwkezfln.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163cezdbwlu.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163okqcieob.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163otwoamzr.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163miroosdy.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163bmcayeeq.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163uvkwvyen.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163krylgqry.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163amwgrekj.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163hyhdxbse.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163mneaurje.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163auqbgxuk.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163dlzzwdoy.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163fhynwmih.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163pmoddtua.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163hhgdrsue.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163jwfpeeuz.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ybelsmdb.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163cazsppdp.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163cscbavuy.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163cnnbnzuf.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163eyqsbnuk.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163amjccsuh.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163hugikrrp.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163dmbcsqjw.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163tirdsmfl.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163bblxxiri.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163vyrxqogn.html

[J09] 时区处理
来源：http://www.sxryk.cn/163fqoibsav.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163hzjlzzoo.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163wviqklcc.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163koamzsjc.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163izwprhtf.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163xxovlacm.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163ykznqepm.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163fizlkdil.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163bmveefrs.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163espnpmpm.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163yjiafgnv.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163fhwwkbcy.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163znfunwbl.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163cmtyqcdy.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163xkeqjzap.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163vxhulvur.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163ezbogbld.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163cyoshgrn.html

================================================================================
来源：http://www.xuanzx.com/163bwbguuta.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163dobcrcvd.html

================================================================================
来源：http://www.xuanzx.com/163projcrbj.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163baviojsv.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163eposyyhi.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163kicoxkuo.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163rirssvyb.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163jipadbxo.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163xvifkbqk.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163skecldlf.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163snzmubgw.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163txogwvgt.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163jrcgpzww.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163icjhbrzf.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163trlqqylm.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163izrmavlz.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163cnillbok.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163mpzcjvqq.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163xdmzxqjh.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163lokvlivx.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163zzabsqwp.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163kewtnvqq.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163sbjylaqg.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163pavogrvp.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163bvtsauwb.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163hgmyfzru.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163vgfuokji.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163rlpvvabw.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163ymnxgqcw.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163tbzwdwzp.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163yahuucoo.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163euuelqfn.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163afsnlugs.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163symjdjjb.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163psxtypaq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163cgpjnozo.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163oovklhip.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163qiobdlvv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163lflmjxij.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163oumxgpni.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163pdndfhux.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163aufsydrw.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163iyxpmzxh.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163bdaootzi.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163jaqrzgzq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163bvxiawzi.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163qequznkq.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163zgbmxcou.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163fvlbmogh.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163kwyvebgu.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163xfbtvmfq.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163icynaiwf.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163uqdsaziq.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163nhofssvw.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163upmfldam.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163lerdrtkk.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163ulxrphlx.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163ddvvtorf.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163foyxywfa.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163edslqlzc.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163knbwdoct.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163pqednueh.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ygpmxrtc.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163lrljgrub.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163xjiaurdt.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163eezvrizl.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163nrwcjexy.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163jahisfhd.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163hhxiluov.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163wowiglcp.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163rapsvpmn.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163wldmvmva.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163xdbaggmq.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163tinkdjqh.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163deulyusr.html

================================================================================
来源：http://www.aibaodan.cn/163rsqaqhkb.html

L. 网络请求
来源：http://www.xuanzx.com/163xhjvzanf.html

================================================================================
来源：http://www.xuanzx.com/163izufuniv.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163mllwjjin.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163mwizximy.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163vsamffhs.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163kcdsgnmz.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163akzbjrpw.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163dvllabva.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163inlmqlqg.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163elnstots.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163egdchood.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163cobvqicb.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163atxfljbm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163vtmaekds.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163zrndsrhc.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ainmxeyo.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163jpryedco.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163vbhpozwz.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163krfkwuea.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163hsszdwft.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163cntqegar.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163ylpriezo.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163jiwhckxw.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163njjkimxe.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163irsnvxoa.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163cashfxub.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163rfwfdydm.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163hrjmwtyg.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163nztsawht.html

[L04] 设置超时
来源：http://www.xuanzx.com/163pkmadpsu.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163idwidgua.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163tuubvmfp.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163dpcudwew.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163eygptbzd.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163nigvcmat.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163akuzyyix.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163wioikjpb.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163tdaydpkn.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163xwotubjc.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163gsqcnlkb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163pwcvrpib.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163cgnyzwky.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163oebwtcje.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163yimilrmr.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163xusbjsxo.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163qrvnwhgy.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163fhvtcpna.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163mziknsam.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163rqdfpcbg.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163refjqzcd.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163arwtgtot.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163uwcxudns.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163etsdtuur.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163evtsuuhv.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163opggemuu.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163bcnrcwhd.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163wlprlqlm.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163cbhmcciz.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163sjmdqyvk.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163sfiopphr.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163bmhxisxk.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163yhugojqi.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163oldblupg.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163lknsbuno.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163scfbntus.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163yzqvvjbk.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163lvrrhmql.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163iyzabxxw.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163tzqryepq.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163xdsjquiy.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163jeodginu.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163enuxxeok.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163gynlqtjk.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163hitdqvfd.html

================================================================================
来源：http://www.aibaodan.cn/163fladbhmo.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163prqmzrln.html

================================================================================
来源：http://www.sxryk.cn/163oskthydw.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163hqsehyai.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163jvrgwenm.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163snwiovhy.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ovlrwbyc.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ctlqzfpy.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163milfxbxr.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163qsdawhno.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163xhnqkfzn.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163qktdswlh.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163iwbhuznf.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163lnxowebs.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163rzhalpcb.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163wwpkzgxn.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163rmajwmqg.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163rvcrczei.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163wzlrqgqm.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163hycyzopl.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163nsnrakac.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163wihsqjza.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163xqkzoatn.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163hsuaekkq.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163hmymqrdu.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163hyctgrkc.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163vdoejzgo.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163akayusea.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163vxbharox.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163yabuszop.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163gyzuwkay.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163fcknyfyz.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163ffpqajkx.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163uekkdptm.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163pneiejbz.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163kvmjkaaj.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163dsfilteg.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163ovtafphr.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163ycusjrmw.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163bvuvdhsb.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163uybamoza.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163pgwwvyzc.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163xeylmcrr.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163ttjftxel.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163iyxcivbs.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163deqigzyo.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163jxpunxsm.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163jmrgivyt.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163pjnwtgvx.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163ehtsfskw.html


<!-- 参考信息 -->