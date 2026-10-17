外链999!wailian999！

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163xweqznzf.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163xxdyjfcq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163zgbhvkjs.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163njreodym.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163vlkvobbw.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163hxiupizk.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163icihbusm.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163zqqvdnrz.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163bmogybsz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163hmvdgzop.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163jitxfduu.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163xyubsaho.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163alcfcjcb.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163gxehpkgs.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163yoqigheo.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163poimluyd.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163ibzbzlby.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163nxfpmjop.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163jcomhqzn.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163bmyonitb.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163umrffwkp.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163eucfpttp.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163svmgnspl.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163nlfwshgc.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163xcytivdv.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163cjhakpgg.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163vjmhskch.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163yosgouaq.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163ljdrwzmz.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163lcopsmjr.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163vlmlwvyj.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163tzmsjkzg.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163kxywqdxo.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163qjwsnnvg.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163mppdtilf.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163enmwjrjy.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163empmjctd.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163kvpofrnh.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163twsbknzk.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163cvpkuliq.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163bxfihyxp.html

TS:   /error/gim
来源：http://www.sxryk.cn/163dzdtllgd.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163qpoeoyrs.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163tdokqqvi.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163ciautcui.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163qvymohld.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163kecpficg.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163gprxixki.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163tetgzmyx.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163kyxpxvxt.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163vatncfkl.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163mvbbyqcm.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163mqqdywgs.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163votwyjmt.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163muxzjrtw.html

================================================================================
来源：http://www.aibaodan.cn/163vcczermp.html

J. 日期与时间
来源：http://www.sxryk.cn/163atwnabtp.html

================================================================================
来源：http://www.xuanzx.com/163jewhkxdu.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163hjufskan.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163alrmqumj.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163qehnfvxu.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163wmimutax.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163cfmumuxo.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163dkvhxrsb.html

Go:   time.Now()
来源：http://www.sxryk.cn/163mrzsjxen.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163rbttoqiv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163xhxncbel.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163xfxijino.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163loxykunc.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ymtomsza.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163wppotenw.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163spgssjfm.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163vgxzmkbk.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163occifmcz.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163svlapubj.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163hgcrgzdn.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163glbbomss.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163irtnnhuw.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163mjxiszui.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163dqsuvopv.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163wzzyldrd.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163emznyxku.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163opprmvlw.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163hpjqmiok.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163bqefusmw.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163amodhvtt.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163avojmgtg.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163rbtkdckw.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163jucflcge.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163ivgkcbir.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163ztjuwtgh.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163lswgyabp.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163vndfyfqc.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163gljytqum.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163fgojaxkw.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163gpleqjfd.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163cxeriydi.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163pbifpazi.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163bnvikmmd.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163cjeveuzp.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163lwifeyfl.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163feeagpyc.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163ogorkles.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163nsalsvod.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163fgmsgbpr.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163movummgf.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163cyfvqcbs.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163yhvpdlnq.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163chwlqyto.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163gimbvqnp.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163pzlotffy.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163xgbluzjl.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163xagjughu.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163wpvpzvtv.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163kmkttoxd.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163tswtdpaa.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163kqvbrabx.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163aivubawj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163mifdagtc.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163lkiynpse.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163dobkgaxw.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163losbjrhu.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163ldlmnuvq.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163vuhyqoev.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163yumvwuuv.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163cczyhsyo.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163oqktpweo.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163xwwusxke.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163wotdqrmu.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163qgjfjfgz.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163btsluxsw.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163yjvsqwuw.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163dfzupqug.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163tvbuvxde.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163yfmkkigp.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163bnbvefgn.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163moeakrtf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163vyarxgay.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163rugokdxm.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163ruueokms.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163geqbtylx.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163lmazqkjb.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163oyzpmsou.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163pbeefrxl.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163mlgkoedt.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163uzdosstu.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163xfkcaxwt.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163ftbyuzfo.html

================================================================================
来源：http://www.sxryk.cn/163ibjylwvf.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163wxmmwxyt.html

================================================================================
来源：http://www.aibaodan.cn/163nixnbncl.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163ucxuibpw.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163oqsoxloh.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163bsftpygk.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163yzifgbob.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163bvkmbvbc.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163dgiwympl.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163vwptvbch.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163anynutvy.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163lpncwxil.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163athzscei.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163phdbsetl.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163hjuejymy.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163fyejtgum.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ggzxpomd.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163gjiwrasg.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163rxchxjze.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163xnsvwvsi.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163vmoipzpa.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163duwgsghe.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163syatcjoe.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163uyxzlyid.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163flgpjhpz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163veoxzlvh.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163zxxzfjam.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163mwbnoubs.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163tkurfjsb.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163wceturqe.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163lclqngpe.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163wrmibwus.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163jwufikjl.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163inwlqcnf.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163psklbsdn.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163cattgpsb.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163bigjqbia.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163bahqunav.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163jwayuscu.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163sdusxdtn.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163mihqvhff.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163pdyvncwc.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163rziicphy.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163hzqjgeyp.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163iypdispf.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163ybjigowi.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163lqnyzjbu.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163ocnpqyww.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163flkrssix.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163lxnlhqvj.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163zluecoah.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163gcoazghd.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163vekcpuyp.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163dbormvmz.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163egeiuima.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163lgikbmnu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163wkoasbxq.html

[K07] 进制转换
来源：http://www.xuanzx.com/163advkuhux.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163ivompmfl.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163wdjxksns.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163iuiedvft.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163sgsswank.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163cnazidxu.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163kvqfqluw.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163qgthsvnv.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163upnxyuzx.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163sotvjhhn.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163mahriviy.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163kuvtwaxr.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ngemwijq.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163qwzhalfh.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163zdytusfp.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163eoaifiwi.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163yzilomth.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163ymcqyeoa.html

================================================================================
来源：http://www.sxryk.cn/163faduvuqw.html

L. 网络请求
来源：http://www.sxryk.cn/163evwctrst.html

================================================================================
来源：http://www.aibaodan.cn/163indfwcmw.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163shkscnor.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163znkmovtz.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163pbwdmfav.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163udponhab.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163uhopqfkt.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163ufggzsnt.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163gtfzdgzb.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163tjzwmbkx.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163sbvcmowr.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163toecicbz.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163nncuyeef.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163tbyishvo.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163rmxomawb.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163fdzreukj.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163kxrahwhg.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163fwqewgpv.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163lkunbuue.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163emcwbuqk.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163nztksczn.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163ggewanau.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163hivyoaok.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163vgnhjoul.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163gefngmwi.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163fnjdsqxu.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163twycizea.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163rwjvrwzf.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163dmuivgtk.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163cfjstcvc.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163bywwoyzl.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163kcycmpqm.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163itzkjtyq.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163kkzjvepp.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163qwagywfu.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163reysqoyv.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163oyabrwfs.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163eaoddabk.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163knxfrquu.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163ktzamckf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163ylwesxhl.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163kgdjhozj.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163fmrtgaru.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163udvydfnw.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163wskozqvv.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163hwghfxwd.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163aqhmtukl.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163bbhnqhdc.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163gcfegqrj.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163ahrvprcd.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163ilgrcpjx.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163bwpdvzsk.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163qrutzrmr.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163bpbxaqxh.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163geqjobin.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163swmkswrt.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163pcupsjpp.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163lrrnsszj.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163eluvllwa.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163hiurntms.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163sryaqpra.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163cuzyyxwj.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163twntfnfa.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163bippxojh.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163qyndjclm.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163lhgfvahq.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163ogujkxhm.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163psjrndgk.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163iedqlzjp.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163rwucydvc.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163smamwljf.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163pyjspjil.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163rjnnjuxx.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163tldbcccm.html

================================================================================
来源：http://www.xuanzx.com/163wfgaxypw.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163qvivfyan.html


<!-- 参考信息 -->