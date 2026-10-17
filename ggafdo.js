外链999!wailian999！

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163zneooyew.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163tqulzpcy.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163qlszpemo.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163qocvnlgc.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163mhmxdklr.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163yrrufsko.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163zboudxiu.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163zeeastjl.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163vyiifune.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163xgpikwfc.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163dmqfwkdy.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163xudpxfra.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163vtwrgcjn.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163bcfcknsn.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163lzzpaldp.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163qchivbkd.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163evzldqcy.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163unttjypu.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163qfuqsigo.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163izzkpvjs.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163pyksjnnp.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163yminojgj.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163tcubjwxu.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163bquuznvu.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163vugkqkgk.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163yeywbkdw.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163nkjlqupx.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163vkojqtgf.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163cbckhelo.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163tsoivkxz.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163aipreftk.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163hwbsqaeq.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163lhnjcinh.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163ggaukdyv.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163wdnfhsrn.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163ejkctute.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163pfiqjdik.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163ffjbbgyl.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163ssqfkpxc.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163nbzrbewe.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163nahsjbun.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163onjtlfqq.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163sxoqgjrb.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163rgngjncj.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163wlsobygw.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163hsrrpybp.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163mndtiwfz.html

================================================================================
来源：http://www.aibaodan.cn/163sfsvnwua.html

J. 日期与时间
来源：http://www.aibaodan.cn/163wypokmyz.html

================================================================================
来源：http://www.xuanzx.com/163fiiiivhd.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163qvjeusng.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163uhvdzawd.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163igkskyup.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163kqvhkdsm.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ieakqqfb.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163qlzlioth.html

Go:   time.Now()
来源：http://www.xuanzx.com/163tdkavaha.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163hujibsoe.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163cvuukykp.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163ukfjozic.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163xlepxurg.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163hqixpniy.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163hawbzpze.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163zxhljymt.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163diwvykmo.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163jpnwwulk.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163rvpfnyoc.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163hsgchlrp.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163pmskedsn.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163aoasbpvz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163rlfjmvgl.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163pigdphrq.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163mbhoagqd.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163ncldbaml.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163outhwsbp.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163xzgtcpjm.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163negaibon.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163btrlxsvl.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163mxkbsywj.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163ghfoenpp.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163cwyzcihl.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163jkfgjvnl.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163pkolozlc.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163tlebkfxb.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163ibsliium.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163obliiszx.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163awmfllng.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163rgaxsxnz.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163fxqtprtq.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163bynpvrla.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ojmtxjis.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163cjtyfdhm.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163alixtskd.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163lcmvcgjj.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163rxwdfdvx.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163jlvijzoy.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163uccbdwue.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163mkkqdnmt.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163maptrnwu.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163gpflyyng.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163wbqtppdm.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163ervzdjxf.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163cteyucjx.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163ygqrbdsc.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163uxaxfepa.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163sombjntr.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163zfchjscd.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163hkvqufhw.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163apxtyvgd.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163iiembghj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163berrjcrm.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163hytldpbj.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163yvhtzmgz.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163snazmgjw.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163mtqogtej.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163tqdwudiy.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163afcakyxv.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163wqjvmwec.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163esdyvbrt.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163gwfxaryz.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163hdjwcxxb.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163irzxtgtt.html

[J09] 时区处理
来源：http://www.xuanzx.com/163xwgczien.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163hggpxkks.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163vtxyecqo.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ezupqshe.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163obmuglqm.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163gdcnchiy.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163qrdadrmv.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163ycuayeck.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163wmevfxpl.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163lpdqihdu.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163ypbqmbhd.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163ldavthcx.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163xdhxoovu.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163mmmrwhxz.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163njdqcgud.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163yfvpopyu.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163rlribkpa.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163kwbebzpp.html

================================================================================
来源：http://www.xuanzx.com/163rnksjcdz.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163wkapndnd.html

================================================================================
来源：http://www.xuanzx.com/163encmgrce.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163temzzxkg.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163vjmglosc.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163hmlsfgud.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163xbhjojry.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163kmhmueqg.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163zlwpuage.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163jefgpihz.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163eybedvlm.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163jylunolb.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163jrjfkkyy.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163oulcjdet.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163syrrefms.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163cofjlvmc.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ytkknvnm.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163orgbbyyl.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ewplmmca.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163aekpnujd.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163rcbuychc.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163tfwzqzaa.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163gbhazfxk.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163aouuntwl.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ytvkttnx.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163jkfstthd.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163nckopqba.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163lajbtdfr.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163kaupvpkt.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163vgjraxha.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163mvpweymi.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163gkczkynu.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163uquvjvau.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ustghdse.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163hxagdcob.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163wqmpyiig.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163nprgaoxh.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163jhljkkmc.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163gvocetyb.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163smbtmoid.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163nfmobzif.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163cdckbapr.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163vbekhlyv.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163dwjcpuwj.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163xiyblfcq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163swfraxtn.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163fwzprnus.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163yfmszzci.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163fehcrddo.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163bubktvhg.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163mddrlqom.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ilxbsfht.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163gbhmcmqt.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163jnmkouma.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163edxdixlf.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163rpeglqmn.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163zhxdacqn.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163zhhpoazd.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163ylmyiume.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163infxinpq.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163cutqtuum.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163lnwwuwrj.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163fozvoivi.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163fizfzggs.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163eewscsmc.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163uamszuip.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163oxhefpqj.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163qsxzayap.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163fjbaraem.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163xdwrymab.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163fqcdjmno.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163hizsfhaj.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163ivojulkw.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163nqwpgqan.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163qnggursf.html

================================================================================
来源：http://www.sxryk.cn/163binwhruw.html

L. 网络请求
来源：http://www.sxryk.cn/163vcccnnbq.html

================================================================================
来源：http://www.sxryk.cn/163hsrkjndk.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163sbgcvuqr.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163spoytzfk.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163kavkvvla.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163umhgggdc.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163tpfpjjfv.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163pfypvejl.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163dmwcrrts.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163acmscxfs.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163ujntsjbz.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163dvoincal.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163tduflfte.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163isacsbui.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163vgzpgxsz.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163tlfnhtgl.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163hhugapcq.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163kxdkbsnk.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163hapgxqeq.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163wppdkedp.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163psnqpakw.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163qgckcbhr.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163bvxqjxjl.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163pgchgvoe.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ausqajrx.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163zuuyngpe.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163evatnrhx.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163imbeayfx.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163gagcgonf.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163euyjqdxg.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163ekqwfymb.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163qvhsqire.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163uewsvmzz.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163nqrwghsf.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163cakkzqwm.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163ndphjxqq.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163urycpztu.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163xrswxyua.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163fwdtxxwc.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163pqbxhyuo.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163oyxukato.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163pakysjao.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163mkulnnms.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163invwgaea.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163hilhmvkv.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163lucnfobk.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163qwgchhuw.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163fjuxmndv.html

Py:   resp.json()
来源：http://www.sxryk.cn/163wwbwwbrn.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163eduypgnw.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163pwfryaim.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163tjnbovfs.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163bjgztzec.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163gmhuqsji.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163gtopcfzb.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163oddzzhcv.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163hzrrdogx.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163hquynkeo.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163rrvirdha.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163bhtfghqp.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163nnpglbfu.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163ytwzkehs.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163hobmtiid.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163rmnkzbmz.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163xqzjbyxm.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163dbwkxrun.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163sjvbeyfn.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163greaoujr.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163jnpzoxfd.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163mirmncnm.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163znyvlaep.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163heaxlndk.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163ahckiggy.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163wykeiiva.html

================================================================================
来源：http://www.xuanzx.com/163swozcnhc.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163xyljepch.html

================================================================================
来源：http://www.sxryk.cn/163hogtifhr.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163qrouhfwz.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163zipjwsdl.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163zdmubsgl.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ihopptpr.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163hprxpjwd.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163tvconrag.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163sphjqndh.html


<!-- 参考信息 -->