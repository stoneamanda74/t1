外链999!wailian999！

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163bawfkifb.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163jlzpnupm.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163fcnwnbop.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163jisecopm.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163kwdzxuqy.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163cpxazlvv.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163nuzpwnlw.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163uitbdain.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163hthciqsx.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163uecrgpta.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163xyfbwsfz.html

================================================================================
来源：http://www.sxryk.cn/163gqftuyvs.html

J. 日期与时间
来源：http://www.sxryk.cn/163zujabxnm.html

================================================================================
来源：http://www.aibaodan.cn/163hiuahjop.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163llddiskj.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163xyhvsyyo.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163oevcgecz.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163hpfnedpn.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163uimeeuco.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163vhcvpngm.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163evqmxvay.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163tphliwwn.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163lffalkoa.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163zmdetwiy.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163inumuopw.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163rlmlrgal.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163kgmzpxgs.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163kyvykfeu.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163cixcqzbc.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163lmpufvmk.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163jlrgqlbv.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163qokjibty.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163qxaxzhvc.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163vtgxpxpj.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163vbevumfc.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163kxiwnrgi.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ftmwoumy.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163wuxhranx.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163xyhzidkj.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163tgqqzfcq.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163bbxzamuu.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163uvnmagqi.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163fohogiqe.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163fudjmwbz.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163efvjqlrv.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163rsdnvela.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163eyajitnk.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163wrsatpnp.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163rwuyuifa.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163henycdjh.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163mhlhpkdb.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163acjspvbj.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163ronkaydz.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163kpfclaxt.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163zdhosvkp.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163nacebosj.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163fjulyzap.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163vcvsasoy.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163fjnuijkq.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163iccggooi.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163tnviocii.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163diotllfi.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163aezhigdc.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163reogvhfi.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163rbkrynag.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163hkwznezi.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163efvexwta.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163mvsmxqxn.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163wlpmzyfg.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163cczxrodw.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163dhuyiyat.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163bumpvcvw.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ehoqpyfm.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163puzqmfem.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163evtcexkl.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163jmwvgjri.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163lmwagycm.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163tsnydhqk.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163oyxkiehd.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163vzlpntiu.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163alqghicg.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163cylugalo.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163xlhzcqjz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163ltmszlni.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163wnimbxed.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163mzdogprs.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163oavvaktc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163oigdzedh.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163gkqguvxa.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163arjghkdg.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ovtojzpz.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163hhudyyta.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163cgtmnqen.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163eerttqrx.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163btfuzsgz.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163hbcrexok.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163bbhiweio.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163cioygqxc.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163ljldehai.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163mqvtatfw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163utsylokx.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163zxpmqtqq.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163mtpyjhdh.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163ssnpixzm.html

================================================================================
来源：http://www.xuanzx.com/163ezraygwu.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163ritdemjr.html

================================================================================
来源：http://www.aibaodan.cn/163naicoezh.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163jhpgwasl.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163louqlghu.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163rovetvnd.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163dcazmrtb.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163bbattzkn.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163kvftpgyu.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163scrdbcee.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163zwadkuqh.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163klvqahqv.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163ivoqdfab.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163dtocmjdy.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163ttilsqfr.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163npmcmbae.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163mfjgvbkv.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163hlcdxsag.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163wzzkjwvm.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163tllrdoof.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163ivvboxwj.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163bihrrypb.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163slwpxpyb.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163rxczalwh.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163vjvqewnd.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163dqgacqde.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163dpqwiwix.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163jfozuexm.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163qmuyseon.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163ahetjgnq.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163fbocrzrx.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163mbrfpqmu.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163cciepqgb.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163qfojhfqq.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163azxilkrm.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163phvscdbo.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163kxdvveqx.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163xziviroc.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163jegkuypf.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163gewynfpg.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163lwdutqej.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163cckozcoa.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163drpoflbf.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ptjflpsi.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163sqmqpohk.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163dzmfaocp.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163iuspyzyw.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163pkuplfib.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163hecyoiup.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163jbnbbdtc.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163vqqpoqrd.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163thpokgyd.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163lwjwotbt.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163lxrddjdx.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163ohckhbct.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163diyzlczr.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163lzkrnbrf.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163jejktjjv.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163pcjhfjch.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163mhwysuyc.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qlxtmgxe.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163hjjgpyon.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163jigagfkm.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163zzfxnuxd.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163rgsuxnjq.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163qceqigsb.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163nrooqqlt.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163bsiuocfp.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163jcjxroib.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163huebudlo.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163nldlmzoj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163buapakjb.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163llummnnm.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163bhklgnnz.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163kyosmkpg.html

================================================================================
来源：http://www.sxryk.cn/163jdkpevev.html

L. 网络请求
来源：http://www.aibaodan.cn/163vqvuttho.html

================================================================================
来源：http://www.sxryk.cn/163uhemydol.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163enlafryz.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163vbnrzibv.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163zmvgjjhb.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163udiegfpg.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163jqysrfkh.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163yuyzizmf.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163qkjozekn.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163yjhmydco.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163jctzlxlk.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163efydueox.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163nvsrnduq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163wailbuel.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ckrcwfto.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163cfantmqh.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163ankfcyat.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163dupheely.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163umvwjuio.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163ykiftyho.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163zeurbbqt.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163getmrhcu.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163laiuwijk.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ulyhjajj.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163phtooluu.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163cuzaimvx.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163hdekbjxr.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163cumfptiw.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163bbsuqibn.html

[L04] 设置超时
来源：http://www.xuanzx.com/163cgakpmon.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163tswgybvm.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163qjkmiznn.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163gfsnhesw.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ezcnxqvr.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163pezqeeyp.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163yfnvazma.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163nokxeqdx.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163shutdnox.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163xpfnijat.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163nanjzdbw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163kyrtmmzk.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163gmpixxcn.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163rfygssom.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163vongitgh.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163jlwqxexs.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163jypimebe.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163ujhnnlkm.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163zefgfxtr.html

Py:   resp.json()
来源：http://www.xuanzx.com/163ptqzzzpx.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163ewflmazd.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163xbtqbcxu.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163fcfvqwlt.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163dtlhomoi.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163mskzfwpu.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163fyvicxbx.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163tejetufe.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163izrrvblv.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163gtvwoehn.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163osknehcq.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163rqspumqu.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163xisazktm.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163vzyhzwie.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163hmczjlui.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163wwmujary.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163eazrjnen.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163ojkitrhc.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163asstdqrh.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163twycsfqr.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163hptlvags.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ehxfwfyy.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163nxkenrvp.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163tipocliq.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163okvqezgd.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163oiidtuhu.html

================================================================================
来源：http://www.sxryk.cn/163hfnrpxgy.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163flujyykg.html

================================================================================
来源：http://www.sxryk.cn/163ztqzffvl.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163xwluicfk.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163jacdfhgl.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163zmbileik.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163raeqnmvi.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163fcgygbap.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163ukbrbjbj.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163oabioizf.html

Ruby: ARGV
来源：http://www.sxryk.cn/163iqempovt.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163rbechskm.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163upahhusy.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163fzkuasel.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163rwegqpeu.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163mwgtagog.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163eudrzdnv.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163wolxyiqt.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163zpfxjxuw.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163yiczdaef.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163mhqabooe.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163cyrcobak.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163rwtxrzfo.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163jynwwfhv.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ozbydftq.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163xybpdhvx.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163uvrkxkqt.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163uzshvnvg.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163ryokwbdo.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163tpjivoed.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163dkltyvjq.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163jyqebuab.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163epaimgxx.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163ioxtygxh.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163szcrqkbe.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163mlxzvtyw.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163yyfbxguy.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163pauvuvhk.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163sxosfsrk.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163wuctecgt.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163kzglnxtf.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163lrtngzaj.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163xmfxenuv.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163ndistksp.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163aogpsjkp.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163clbtdfle.html


<!-- 参考信息 -->