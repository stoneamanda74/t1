外链999!wailian999！

================================================================================
来源：http://www.sxryk.cn/163wfgpvqez.html

I. 正则表达式
来源：http://www.sxryk.cn/163fyeppnfv.html

================================================================================
来源：http://www.sxryk.cn/163pgqbjcdj.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163fxacabck.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163ggzrgwfu.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163ixkurqld.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163otropkpj.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163tpajebeu.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163yphgsqjs.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163huehhsbo.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163rcjsddsh.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163hiuqmhla.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163vsowpjnk.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163uofzpiyq.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163bttxgydw.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163bsnhcznm.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163nciwkwel.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163vezgpbaq.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163skpngnif.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163ttimmoop.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163bnzrijjy.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163mxtirhlp.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163yjkdpxna.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163xdswanvc.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163vtumbrtq.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163svztcude.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163uttayvla.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163hpoeubpq.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163avxxdbba.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163kdifdtkp.html

[I04] 正则替换
来源：http://www.sxryk.cn/163uzqyswpq.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163lzjrrzwo.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163bnjgagay.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163cefwuioz.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163xnkhputf.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163uozxoapw.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163mwncmstx.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163pcibiesd.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163wpfhpren.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163bfnmgzgo.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163bipkifqw.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163znjhshiv.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163uqqffsne.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163aawlatvb.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163kcywaiec.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163axmawcay.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163bpfaomuk.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163kfgmfcgv.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163roxbisir.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163iekqoyrk.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163xdmpzult.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163kraaoacm.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163nybgumoi.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163pibguddt.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163hmdkbtca.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163qutoaymi.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163dmompzfp.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163nbbkazxr.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163wyrehdji.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163lyxxpkeb.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163ixozbwmm.html

TS:   /error/gim
来源：http://www.sxryk.cn/163rvzirphr.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163diltjmzo.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163pyndagav.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163axtdzkce.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163vbxblkpk.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163pjkynmma.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163owyaksuq.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163jrvxnafh.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163wqjbyasz.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163zmeeyuwo.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163vdgtqztn.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163kmbypxoc.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163tzzzleam.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163lsbruoqv.html

================================================================================
来源：http://www.sxryk.cn/163zrfmermn.html

J. 日期与时间
来源：http://www.sxryk.cn/163kmznhpyq.html

================================================================================
来源：http://www.aibaodan.cn/163ktrphdzl.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163owidkomb.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163gwzplift.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163vtgncbrv.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163udhyeeji.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163zmjqknpb.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163muaprhmk.html

Go:   time.Now()
来源：http://www.xuanzx.com/163hrfwrvlb.html

Ruby: Time.now
来源：http://www.sxryk.cn/163fydhqfar.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163ekqtfbxl.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163xneyxgav.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163xgmbtmbk.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163rsissoxv.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163rqdyzrcr.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163ivmfbjbe.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163shksvhkq.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163tguizabu.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163kvypkpcv.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163xsjxeduz.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163vhekbkej.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163fauamoxf.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163mbqoyeqq.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ayekodsg.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163hjhoxnvs.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163imliosjp.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163zhhkfztg.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163royeomrh.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163edikxocs.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163gsaiqzbd.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163uhwchwds.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163gneqwtnm.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163axxhmtgz.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163pbshhtyf.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163aszxduhx.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163qlpsnimw.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163eiivgxhx.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163mzkagpfk.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163lqapgdkm.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163ggmvtqfw.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163pjvrzkpb.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163fhwbmkfc.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163kdwuaein.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163lwzvnqaw.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163xkusaenl.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163rdgcqrnv.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163cxcmiqma.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163alsgpioj.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163bhglgquw.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163rcqoleec.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163wgokqujt.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163hzshyhii.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163zwcceazf.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163rbablppq.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163hrsgcmuf.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163xgxzdukv.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163ikjnryys.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ivoduybv.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163dhctnktq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163psjxmtsy.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163axfavriq.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163byzjltyd.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163hzvhfxqb.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163vabcbulu.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163dbqszrui.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163trjbeypk.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163sqlhwkfw.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ezbulxec.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163glzijfpj.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163yjqrkeqx.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163ktiijvmt.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163quhawvyo.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163fxscwjxd.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163jsodlloy.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163lhuvdfgt.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163wcukemxz.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163hpamymtk.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163xqwxjjto.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163mdcvtdrw.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163gcvlhmyc.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163pemyqfcv.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163ifiztvlj.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163rprewrzw.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163mmxfvyra.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163ncykfyiv.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163dzwvxknj.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163adozxjdj.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163rhuwcwzx.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163dayoveqz.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163bjsxlrki.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163qlzmwwfm.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163jnozkplf.html

================================================================================
来源：http://www.aibaodan.cn/163sgbtqppf.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163szxtbgka.html

================================================================================
来源：http://www.xuanzx.com/163tzggdylr.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163swcgigvy.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163pppuludn.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163oaceptev.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163mdphzirj.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163xjswisfw.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163dngsquap.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163qhlstxei.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163peqggfyp.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163mkypklag.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163mnpaiorv.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163mqdrzupb.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163ewabbdpc.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163faxyxone.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163rlvzfwoe.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163kjehrkjw.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163pfrrqdzv.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163txznelxp.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163clrfuvvc.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163gtomgyxy.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ndqfpnav.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163umqbiqev.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163bdxahgyd.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163yxniytxs.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163lggpvuap.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163huzuyofk.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163vpklbkpb.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163mlqnlxgg.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163xtqrfuje.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163sluexzdb.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163bszhryvt.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163okxgjxob.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163zxltzyeg.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163zklctsnd.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ksbvsdzd.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163ufysyavx.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163ribdtyde.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163folqazeq.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163aladwvma.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163oxxyqxot.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163hylyssca.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ivqrvaqn.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163bicmndtc.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163cqlddral.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163rjutosck.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163tchraoaf.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163omktrqgm.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163jiqlzwyn.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163tqpykchg.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ljhisvix.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163dmejgnyj.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163cgwreyyt.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163tjmgbdlo.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163ugwrvzoi.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163zhoryskv.html

[K07] 进制转换
来源：http://www.xuanzx.com/163grrkihys.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163neaiywmv.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163khdlovve.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163lriqtqui.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ubylusjd.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163hsfktagr.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163usqdmejt.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163aakohxkp.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163hlejlpfv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163hbcmeosr.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163xbxqugol.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163hptcijqv.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163unrrojiz.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163axkwcjvp.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163yjuhkvcl.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163gfisjvhc.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163rzfcpmnx.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163iwckckrj.html

================================================================================
来源：http://www.sxryk.cn/163qhvhadiq.html

L. 网络请求
来源：http://www.xuanzx.com/163ukeymvez.html

================================================================================
来源：http://www.xuanzx.com/163fhekeppz.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163lvyxbddh.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163zvmykzbb.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163cfrknvgf.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163natgesve.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163edkeycqp.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163mopgvccu.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163ljhvpsqe.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163kzkzxque.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163ddtytlpl.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163ptaeyxfr.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163njcmuxdc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163uwpqzueg.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163znllbqgt.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163apthjkgt.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163jszrhxoy.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163meffzhbn.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163zwxhuvpx.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163xazxecep.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163bylrrzmv.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163umqajfkg.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163givzdjht.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163henecsrg.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163wrkyqwpa.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163qhqcvbkw.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163shnxmudr.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163enmxovcl.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163izzpsxvz.html

[L04] 设置超时
来源：http://www.xuanzx.com/163wfjuwndm.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163bskcheem.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163rsvthpdr.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163bnqpwnjq.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163tupmqhmj.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163tomzyaef.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163jcyesosv.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163ozqjfcfc.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163qkmamuou.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163fxnwpcjb.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163adhpluss.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163zcpivdkx.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163eptrpzwr.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163whfnkfki.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163bmlkajwf.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163unfmzpnw.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163hketkdjf.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163gimzwnpx.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163uzobdtxl.html

Py:   resp.json()
来源：http://www.sxryk.cn/163aycgfyum.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163onritmbp.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163pcvzfrwf.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163nmzspbut.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163mwurgfwf.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163mkkzlkqf.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163soeqeysh.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163mmxfisqt.html


<!-- 参考信息 -->