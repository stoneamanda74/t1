外链999!wailian999！

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163acixpcfa.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163utpharvw.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163gpmdzhuu.html

================================================================================
来源：http://www.sxryk.cn/163ngdemxps.html

J. 日期与时间
来源：http://www.xuanzx.com/163cfztomoy.html

================================================================================
来源：http://www.xuanzx.com/163aynanqfv.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163rftzwqlw.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163gfhonhar.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163vswemnsi.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163cjsovwpr.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ibweztlj.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163kglrztev.html

Go:   time.Now()
来源：http://www.xuanzx.com/163ufznjlbu.html

Ruby: Time.now
来源：http://www.sxryk.cn/163hbntforp.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163svhqxfct.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163yzznlags.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163xvykjiik.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163uhiisyoq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163vpgakfwh.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163btlewvje.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163yoajykgk.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163ywtmnykp.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ugamdolu.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163awjirknm.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163ymjwazze.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163uonolzvq.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163hsjbhapf.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163bocvlhbe.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163fonwzgmx.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163dvnqemyu.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163qqnypyxg.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163dcnsobce.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163vnmswisl.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163endbyyts.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163ysogimbj.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163qswllihr.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163lugwiyye.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163lqrhgkjr.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163dgwzjbzv.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163zyzgokoa.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163ngioyfup.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163rezgynac.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163pcgagbpv.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163ifgdyryv.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163zprcusde.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163hbdgvejh.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163jmjgmobb.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163wmryxuyy.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163asgapjqp.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163gaojjain.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163nxzprfjc.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163mhmtxckt.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163giiedori.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163hgbfznrl.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163folnsild.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163kayihghx.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163klghkbxd.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163yogapzee.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163ulcfemrn.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163sxphlutr.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163pgwulipe.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163jpgmlpst.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163mqzriqbt.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163hwzqbjim.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163qrorayes.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163iwplaumm.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163epmkqpqv.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163wuzvuppd.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163uvjwkcnd.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163mzgmpwhn.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163uphxggnm.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163hsuuxxfo.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163yzagngqg.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163hpuuiprn.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163tbnthrzm.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163bwhrrkst.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163ugrncrut.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163eqfrllpz.html

[J09] 时区处理
来源：http://www.xuanzx.com/163oqgldvyb.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163kerkpzjb.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163oneodkah.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163hsdlyaku.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163txjvrnmb.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163pkbebmnw.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163aclmijyd.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163fgfldvuc.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163layonbox.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163nhxgjzns.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163jfpwpcfa.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163qyshuhlb.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163thawrrlh.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163yqlwrvyz.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163dwianutl.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163cbsolmfw.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163eryssfwn.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163sgrekmqh.html

================================================================================
来源：http://www.xuanzx.com/163sortmnzu.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163hqcvqclh.html

================================================================================
来源：http://www.aibaodan.cn/163nppclsfv.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163rpesmgsv.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163ywfkaixj.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ypmxvjkq.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ugezezgf.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163hhtngjoi.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163ugakpvis.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163tfqgoqwn.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163qkkittie.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163pnkccmxi.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163syjpngme.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163scncdpqe.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163hkpodrnz.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163nqmnbztl.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163hycfipgq.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163msyxauhp.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163jalcfgsi.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163huwbjtbx.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163jfjignaf.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163plzfqjqx.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163gfshvnhb.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163kehayuev.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163erruqvne.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163uicwcfyc.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163uejufedt.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163appupjyc.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163eturjysg.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163qaouzhlb.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163mwkcosrd.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163ilvzljai.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163wkmcahvp.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163bmsljide.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163znyahqqb.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163akqguuda.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163adstqegq.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163whlopliu.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163mpuvogti.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163derdegrb.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163ahwkqhuf.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163dkvgzgea.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163zhddduiy.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163lhqwvkne.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163nxrvolds.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163hsjatnbu.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163vsfgwbuz.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163ogxawkgx.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163qihjshys.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163brhjilpm.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163vfdnhoop.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163uyyjljmd.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163flteaoex.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163wejyqiyh.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163mwfxzajk.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163abdgazaa.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163taihtblz.html

[K07] 进制转换
来源：http://www.sxryk.cn/163cdxsgwgy.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163euoopxnb.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163xdtchwtw.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ntxyszkx.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163mlbjzysr.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163kowcsgwf.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163vnwlngzb.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163edzovsrq.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163ddytlamt.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163mhjmwxph.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163slihsckc.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163kbejjfnm.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163avjctxrs.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163vxcicwqf.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163wkagcvzu.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163oghxtcip.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163ucqimjab.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163sjvuuzwb.html

================================================================================
来源：http://www.sxryk.cn/163nvpsjlem.html

L. 网络请求
来源：http://www.xuanzx.com/163jbohhaue.html

================================================================================
来源：http://www.sxryk.cn/163gzjesuej.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163sbnnoygs.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163makopoeo.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163jxmhwdqb.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163uhmtdnvl.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163wvnidgjx.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163gixcwwxn.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163gpfinksk.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163jnqaymeg.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163iutqkykc.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163xuwufsty.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163tuzbyegt.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163qwgmnduu.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163wpqsoxsp.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163plyinckf.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163qyteeiqo.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163ztednlrt.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163qfhoxuli.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163hdmyixiq.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163rzoziaqa.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163dlscsibu.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163cvpprbma.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163okmximhm.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163gnjysbjj.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163xkaxsrfy.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163mleamsfd.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163gigdkscl.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163yemqhkno.html

[L04] 设置超时
来源：http://www.sxryk.cn/163trpnlwsa.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163tqboqfqe.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163nafhnthr.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163kapbuqmx.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163qphanvih.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163bpfoelxe.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163mfogvmgd.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163avdnatfx.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163jddcovcw.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163kskjduvr.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163llbzplka.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163cbgebteu.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163hzhhploi.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163iirqvexh.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163digmkywz.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163bqlpdrol.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163mopcwybc.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163wisnsxpn.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163mxhninzd.html

Py:   resp.json()
来源：http://www.sxryk.cn/163gxjjyvjl.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163sgtfntdh.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163gyvgiled.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163uxckvzqn.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163vrnaxfit.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163xbxbnlzs.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163sqalmvbd.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163avvwhnzh.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163wintbriy.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163jwvhhspc.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163svpzxxwv.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163lrksnqbv.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163jhptsagt.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163qhqfukjr.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163xpsbewkv.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163ftypftvn.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163nvbxdgko.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163jtpytzgq.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163vvawqkcw.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163byvmlesl.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ajckdyqz.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163aukvfppi.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163bcizfoua.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163ufqvyasm.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163vbptkcth.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163tqlqveta.html

================================================================================
来源：http://www.sxryk.cn/163ibzrxevf.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163lbxivtqt.html

================================================================================
来源：http://www.aibaodan.cn/163okgycwmk.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163wfchwuxx.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163kjibvfsw.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163aodlwvph.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163fustegwg.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163hmhrskyi.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163hthygifj.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163hqikmzun.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163jkkwdqxv.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163mmzfmvgx.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163uxmxvegz.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163zequtuus.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163eurjwndi.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163tcgnxtrv.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163gsmerxji.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163zwyjlhal.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163iegjigqx.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163nigmvdqh.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163qmwsllai.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163vmphzhyh.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163dduqobtx.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163fvmyeowa.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163cnbnhycl.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163qvwujxfk.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163tvyxmlvu.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163zcityuvh.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163wutpazpa.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163ikxxvtap.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163nnrdfxei.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163wsqqpedw.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163yrkgykgn.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163vsvjazjm.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163irglqqxr.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163nklykrfw.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163utwekqos.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163spepjagu.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163dtquwbpg.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163vyzybsoq.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163lyftovnj.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163krrzxtit.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163sccndrpd.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163jzebdnhc.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163zuqibxxk.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163mpcdhxii.html

Ruby: exit 1
来源：http://www.xuanzx.com/163wyiqhebh.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163soyorkfp.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163loaqrums.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163tkckxnjb.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163svscckmi.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163vawmhezq.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163ucfcuczk.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163utmkntju.html


<!-- 参考信息 -->