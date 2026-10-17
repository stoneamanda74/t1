外链999!wailian999！

================================================================================
来源：http://www.sxryk.cn/163ezsoqxgg.html

I. 正则表达式
来源：http://www.xuanzx.com/163mvjppuew.html

================================================================================
来源：http://www.xuanzx.com/163wxmdvefl.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163asnjxbie.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163apsrfqum.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163jvyorwtx.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163knefztdz.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163lkppmwff.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163vvgmgwwg.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163rstkpaud.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163jzqzvriy.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163jhyzchsd.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163iydlnkmy.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163ockfhlsc.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163pabvnsci.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163zapzyhpw.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163jwuviove.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163mjulxdjm.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163ybtiptif.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163doxkvjpl.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163duducozz.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163rwpnbwyz.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163bdcdnbkt.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163wuryufws.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163rbqudjjv.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163muifsnhz.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163drzqggxg.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163naobminw.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163quwxbtmj.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163nittvfks.html

[I04] 正则替换
来源：http://www.xuanzx.com/163nkoqtdoc.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163ryfgdgre.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163itytsnox.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163rblrxrcb.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163qpubyojs.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163jbvwxust.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163rqcwiivq.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163ihlkitmg.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163gtkaxgra.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163nszmlsgd.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163ojqkhubx.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163bqrijabj.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163aqucmgrx.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163caoxcxul.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163weqxcoux.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163giyxkurb.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163rtkdfipg.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163ebjceuat.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163xkurbkxx.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163npuuxsxj.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163vgwhgirt.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163uwguzijp.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163lrhwgfqk.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163uvhqzgar.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163mpuvgbtw.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163zczshbru.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163dwyqbvts.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163imggphyk.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163tjuvxqlp.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163wpezazkj.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163grkgbiiw.html

TS:   /error/gim
来源：http://www.sxryk.cn/163ekwaxruf.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163xhlwzcaq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163zeulnuif.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163hrjulgqr.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163ynsmonyp.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163wkiqgqxw.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163xfjupgzh.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163cmgspnly.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163xcyhyjel.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163necxnqmg.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163dimszizg.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163obqbaowa.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163rbkgleqd.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163eshvnrrg.html

================================================================================
来源：http://www.sxryk.cn/163xoixnojb.html

J. 日期与时间
来源：http://www.aibaodan.cn/163cccvubdz.html

================================================================================
来源：http://www.xuanzx.com/163jfjourzx.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163cbpezfzb.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ewihqdni.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163zvcadmer.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163gphyprcr.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163xddmsdlr.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163zjnvteph.html

Go:   time.Now()
来源：http://www.xuanzx.com/163xuwnpfyt.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163xlgkxofu.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163feyvyqcb.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163zyabkrln.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163omnxirhr.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163qhquiolz.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163ckhtvkjk.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163hoxrught.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163aywrpizm.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163jjqgpjdo.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163jzmfaveq.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163ylcriwci.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163bcdmcrgu.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163ygoiciry.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163lkvpancj.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163bwsxnqxe.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163mmsisiut.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163xnjzixrj.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163usnrrqkk.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163numvscmk.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163gpmpxvnz.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163mgnnptau.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163gfpsvuma.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163eqhejfwz.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163foejnxdb.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163ciwibwix.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163ovktqteg.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163hbrbgbpx.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163egjgseyd.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163xvthyrea.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163cjwavolf.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163wpzxezyo.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163xylniguk.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163lrlznbyw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163vzxljpba.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163smudscdc.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163osqzyiba.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163oxmjdpko.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163kncpqjbf.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163mrxbcklw.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163kcizwgmk.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163osyowbzv.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163ddpfkpvs.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163aoozudmo.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163gwpoljyd.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163mrmebijx.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163imrfkuoq.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163gvfzkcek.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163zpxnnhrc.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163vcsgqgyh.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163bxrrhhkw.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163vwekzcet.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163aydhpavt.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163eiclsssc.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163ghzrxokh.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163vplmgqvn.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ggllparr.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163kaiarizo.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163lbbzjfep.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163emncapdu.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163mcjfcmfn.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163nrruscei.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163qyoodjkc.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163expihnkn.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163seiozzge.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163wuhijmqy.html

[J09] 时区处理
来源：http://www.sxryk.cn/163ywqwngxo.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163izemyyxw.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163vssjvgnc.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163fenivqgs.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163legocwov.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163kfpcwidz.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163vlzlmufi.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163bzftjlov.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163zbwwudyj.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163zfrehebv.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163vnkdngmm.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163oziurpzv.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163uvnloufp.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163wdalwefy.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163mmkmgiyz.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163gqfhmpnf.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163wrgjnlzu.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163dpitokca.html

================================================================================
来源：http://www.xuanzx.com/163jiixfxby.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163xxxhggbl.html

================================================================================
来源：http://www.xuanzx.com/163dgeyixbw.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163qviixqic.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163kynhitez.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163byfbijzm.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163pbooxkbd.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163bsiqlynw.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163soopocuh.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163lrhqpjfw.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163khunklxk.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163tjvtcqhe.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163wqhakaek.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163tgnzylzz.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163hghdhael.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163zywdukck.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163gzuxtgrc.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163varatknr.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163vhyqpcpq.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163dwrqlqeb.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163wshdnohe.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163jhqdyesp.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163hiwvorhz.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163rubgkpak.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163xzlsntcg.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163pzakfzdl.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163ratlovbi.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163ggyvoedb.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163baiqyqyx.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163plqnqbdv.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163kksxwzkd.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163myhhzjpq.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163vnllzcfq.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163vvmxtomd.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163huvfkldq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163zohepvce.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163nhlvqehk.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163pknrqnlr.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163jqoxsyjd.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163qzsalcbr.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163mufdbcfw.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163smtvkxfm.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163relsemjj.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163xqkdmjch.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163krfcreje.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163szqhrcax.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163wjfjltgw.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163mxbrdtar.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163wbnwvder.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163liolgtzr.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163aemgqznj.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163vorpbpae.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163xwrvnzzz.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163nownapkx.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163gbgqtduc.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163rnoavtlb.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163cqemsimh.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163bkrqpgcz.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163lxqgcabr.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163pueqxbxh.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163lfgzvpjr.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163tnhtocgb.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163vxmkymfn.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163exouitsz.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163ujcjnhgw.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163gmgvzhcn.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163chaozyse.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163tehdstkg.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163vmzbirls.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163zsfxroax.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163kpxbvizl.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163usmoaawh.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163lzesufkd.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163sdocnsnc.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163kwkxxxrb.html

================================================================================
来源：http://www.xuanzx.com/163gktolwqu.html

L. 网络请求
来源：http://www.sxryk.cn/163lsprxfbb.html

================================================================================
来源：http://www.aibaodan.cn/163wterocjg.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163cwjpuenz.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163nitmsqux.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163oracapjt.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163vsrrampp.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163cubznvuv.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163xkspazdi.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163erzadsmh.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163yhflbddz.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163qjdttqei.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163eeiwyfza.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163rdlainia.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163jnicpijq.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163yigedsnu.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163enauelbb.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163uegifrxy.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163nvbyxulf.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163ssqnkiyd.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163ldtvmjxh.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163sreesqfl.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163unhzuhpz.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163mquyxvbj.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163alfjsmub.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163nujtfrbn.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163gfrhoqkz.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163tdemmljt.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163vfkwhage.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163msyktzvd.html

[L04] 设置超时
来源：http://www.sxryk.cn/163qttejebb.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163vlgyefaz.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163cyxpykul.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163xxkzzrfp.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ceibbyrg.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163gvzyggzh.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163kktyucbr.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163vmfgzvwy.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163vwvsxnml.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163etqnnafe.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163plalxbrf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163tvmxfzvu.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163hdcnegyr.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163gnfkncrz.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163rrlbgtui.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163tqckhlmt.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163wlppyllm.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163cxtzglvn.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163qxddsuew.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163afujhlgt.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163azgqwcrf.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163feifbrty.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163xpxrbvgf.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163dxwlqicr.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163eaowyqde.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163mdtjlqhc.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163jzzrhwcq.html


<!-- 参考信息 -->