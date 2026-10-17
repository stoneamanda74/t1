外链999!wailian999！

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163qtqpazap.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163etfepzqn.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163diimmtnc.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163pjlzeldy.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163sjppmykt.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163nazokzem.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163zmnxmhxr.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163nlhorflt.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163zxaefwwz.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163rcpekndb.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163xnuptzcj.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163sssfblca.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163hskkhcom.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163uliupgka.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163eaxaogcj.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163jtogevxv.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163lldjfgqz.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163gqsolfbi.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163hjsslkyt.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163bdfwgmdy.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163xnlwcsbh.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163bbgdyegt.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163xafullwl.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163oliaedpo.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163eucufqqu.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163zmxfnwkg.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163sqkvdold.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163lfcbxuxp.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163guwakztt.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163bcayztep.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163uofbevzd.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163ponadoun.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163edialjqd.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163pxupnmjn.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163fkvgfacp.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163nnxiwvhh.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163mgbfmewv.html

TS:   /error/gim
来源：http://www.sxryk.cn/163chhizgka.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163vxmzgecg.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163hokftvnu.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163qdxvvdus.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163dvfswhwa.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163msyhqzos.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163kbdmzshu.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163mblxkils.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163atcpnehd.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163efiamvlc.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163atejrxhd.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163dynmqcue.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163sffpgrsf.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163dotyyhjz.html

================================================================================
来源：http://www.sxryk.cn/163gsvbsmuj.html

J. 日期与时间
来源：http://www.sxryk.cn/163wbgpwtlz.html

================================================================================
来源：http://www.xuanzx.com/163rmnpkxia.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163cclxgble.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163rtqudpmc.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163kqlylgme.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163mhoxijav.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163woarrqbh.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163utsxaslr.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163drfeqjba.html

Ruby: Time.now
来源：http://www.sxryk.cn/163mpznktzy.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163nrwxxgqa.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163orkswaji.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163vfxsnvga.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ltkgkxtl.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163fvfhgrdj.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163csfrmddw.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163vvnkflkr.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163wdxbvfxd.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163vbwfnkrd.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163ljesnmqs.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163xhagmdly.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163naycjjob.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163eboqbmqv.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ifrycslk.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163qirysytq.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163lwgwxmbo.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163ugtkxebg.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163oajrfgcr.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163itfefwqj.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163issfnjei.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163vbjyobex.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163naycijsn.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163hvvqjutr.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163jlituavo.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163zgbehadd.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163modpdfuf.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163juttzsiu.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163zraqqodp.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163jglunepz.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163ofhosdgk.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163vffrqeyy.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163rmljsvva.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163gekaoihy.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163ijpdmjco.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163lprzclet.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163bcdmoqna.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163nfjmuegq.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163kvfzycra.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163uwgrvjdw.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163xsnjaxbd.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163omjgnjxr.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163ydlgzhgi.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163dyybkbdw.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163duhsvodo.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163ebviuqqa.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163qjhslsmd.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163uulsptbn.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163fsqdrmmd.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163hshurwbg.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163zzizsays.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163nnlgzgms.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163hjcfcnif.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163ggzguppc.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163wbgtuoxr.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ldvkipyk.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163yiwqevly.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163hfwmjlnn.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163ofzjtogd.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163gshqxwvd.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163umyaivjk.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163fxbyfldg.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163wxohofpx.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163rudgnuiz.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163eupojona.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163wxgndrdo.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163jcsqauuh.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163xibgqwyu.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163whsvvixj.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163slqbedny.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163iahhmjhz.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163vhpnfmos.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163vbnkkoya.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163ozdyuhke.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163eatrntlc.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163cnjmowvo.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163tjclgxzd.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163rrsxyfih.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163yulwgngi.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163wqunwrqm.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163rsuxzubc.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163exbvalzo.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163psdcqeix.html

================================================================================
来源：http://www.aibaodan.cn/163cwwvxrpu.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163vtgafkro.html

================================================================================
来源：http://www.xuanzx.com/163ftprtbsv.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163lqkoxlxq.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163chodbcfa.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163xfalfjoj.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163bymppghp.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163yxihfixl.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163zpkbcvxf.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163yjgdvwfr.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163ticvqiwq.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163rkznutah.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163bilhblxj.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163bwxfyxqt.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163nnyldmop.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163jjorfjdz.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ifdckbvw.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163rfdslmtf.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163pflemrhh.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163ixkjvmoe.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163lvdgvstz.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163cbezuohx.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163muvzxsih.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163psabcpuu.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163zkarmvuj.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ibkkhcnu.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163kpivjhmk.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163digytazn.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163ksmqrmkx.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163loaxsrqb.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163vaesdzlj.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163jrjkwyqb.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163ftbefqsx.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163xyoihugy.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163vybrkfqa.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163enddkesf.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163gfvqulsp.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163smkmydvu.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163rqvaesir.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163mbjdirqm.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163lqhnpkhw.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163uxewidum.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163xawygjgs.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163hcxbsftp.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163ezjpkemr.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163pckdecdq.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163vrjwulnb.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163qybvdqvj.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163uqagklqy.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163uxbcmoge.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163cmsxrdep.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ncouppqa.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ovemldre.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163bfqlctnl.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163seomjots.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163mlbwxjkp.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163aqcmhnja.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163odumqvqo.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163wpdcwknz.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163acmzdvxz.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163njblllzl.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163isltdxzv.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163ygmrvyfr.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163apnmvrvj.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163gifnxyes.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163qfaxoibc.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163lssqabel.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163djxykbin.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163xkxfklqf.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163wafmadbr.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163pxxkywdx.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163wwdyzwux.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163apjicyse.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163mkyxizpo.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163ykaoewdh.html

================================================================================
来源：http://www.sxryk.cn/163smomqeho.html

L. 网络请求
来源：http://www.sxryk.cn/163hljicsbp.html

================================================================================
来源：http://www.sxryk.cn/163fswxhofs.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163zlkspwlj.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163gwxaqwsx.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163jqfekbhx.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163ntwmnvqx.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163qhnszptv.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163xgqfvehy.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163pdjwmmoj.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163sxfywxzm.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163mqbrebqc.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163llztockg.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163cjtxveyu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163fkfegkpl.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163xqhaqnro.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ycscutbp.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163ujywgiqj.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163rriwnlmk.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163juqookxg.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163hjzzmpla.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163fuvgdrjd.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163wxgznkjy.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163gbmtrlon.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163qosyrpoa.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163efghiqic.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163eumjnjuv.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163jcibjlxj.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163axjbmozt.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163vctzqwbg.html

[L04] 设置超时
来源：http://www.sxryk.cn/163iblfsdnz.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163qcrqproz.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163fxdkpeoi.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163bxafycxs.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163kwalcnmi.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163fsfupamh.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163vcwmjadl.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163obzjtwed.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163etqqixmt.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163nxfclkik.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163gwmrbdin.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163nnnhpsxw.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163kfbsqsfd.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163abbtzxvo.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163gphqbinx.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163gignzjzd.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163frexbgpi.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163xosgvwze.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163pghrtomj.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163swrlmbem.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163nzhzcqti.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163vxrzjifb.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163grhgkdiw.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163nfsafazi.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163jvehbkkt.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163oofkgllg.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163niokpxrp.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163xzavpzou.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163ihymulzt.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163imndljla.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163jmpqsvwv.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163opxgimsb.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163xbsuwapq.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163uuhdwllm.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163zpohqofb.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163jiisxnjz.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163xfsnzkqy.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163mjuxgbwq.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163ylpszxcl.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163tlaxaaue.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163jtpkexix.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163ojoauncv.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163zgeetqtg.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163zfxcrrcm.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163puudwavb.html

================================================================================
来源：http://www.aibaodan.cn/163dmdkitzi.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163crkocuhd.html

================================================================================
来源：http://www.xuanzx.com/163wkvvzhob.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163ipapsrne.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163sxqtekrh.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163fdlelyxv.html


<!-- 参考信息 -->