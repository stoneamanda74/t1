外链999!wailian999！

================================================================================
来源：http://www.sxryk.cn/163fnyeguwx.html

I. 正则表达式
来源：http://www.aibaodan.cn/163qrfipomd.html

================================================================================
来源：http://www.xuanzx.com/163zobmspwl.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163ydfaxtln.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163xevaxwwn.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163fyrwmtth.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163pbfcdplb.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163tkizhgni.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163amnwcwyz.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163xhvbcmtn.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163uhoeoozj.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163skpiwsyo.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163ksozjybw.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163cpglbhlf.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163gtmzzjjy.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163qbtwfatm.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163tcsquyfd.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163dxgzlswy.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163nezpnmrc.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163msjteuil.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163nqquytfq.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163ikyybbha.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163xvfhjwdc.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163xkkcakih.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163snocvvly.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163zrfldfzl.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163twwcxnlo.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163gpzgjhod.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163zjeyskut.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163wvfupnfy.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163ivfrzvaj.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163lczmekqs.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163nbplcpeu.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163mpbxemtw.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163cgzbwlpp.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163pmasbowc.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163uzwubsud.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163poramfqq.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163tyrckpql.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163ooynppku.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163ydqjrldt.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163vtosytjx.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163khuonxvf.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163mjrspfui.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163npqtvbhy.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163awqvumoo.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163jmaivyay.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163gxrhehxk.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163dpvzngpd.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163xobxzhic.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163rdyfeoyx.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163mrbzerbt.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163nwkzquek.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163imjdipsb.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163zzxjweid.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163sxiibzxa.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163pqmrimvu.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163kflnedqy.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163gwreghbk.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163jzfcuykv.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163cddodxhe.html

TS:   /error/gim
来源：http://www.sxryk.cn/163ckbtajdx.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163ayahabmt.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163yicjchat.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163lwewdqws.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163mkwssfys.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163iegdiypj.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163ijnuqvor.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163zgbkivbf.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163qwxyjidj.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163gzssfxkc.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163voypsofx.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163fwwmzunh.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163xoptedsk.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163wvzngesr.html

================================================================================
来源：http://www.aibaodan.cn/163bkmeeprz.html

J. 日期与时间
来源：http://www.xuanzx.com/163caucxboc.html

================================================================================
来源：http://www.aibaodan.cn/163pdrgbxnp.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163lgfiwytl.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163nrdsleee.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163znjkeqxe.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163fenjxikd.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ghaobntw.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163mqtonlma.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163gmoysmpj.html

Ruby: Time.now
来源：http://www.sxryk.cn/163zkbnxatb.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163gvcyrjtr.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163oncdovbr.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163axbbitfs.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163gbskebgn.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163qrnzdoag.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163muycksgt.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163knolcxto.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163jkfzgufm.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163nyhdzpoh.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163jhwjpiqv.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163clowrybl.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163ldwvpyag.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163cstktkvb.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163alomwxty.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163iahvbhwa.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163mhxwsabo.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163ysckhnfc.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163vsslkpul.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163lhqugyxa.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163jbukaumz.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163lncpewph.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163oxajdqbe.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163zliwkjsp.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163gtljhjna.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163mmzpxaay.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163zfypiepm.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163tjrwlwkz.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163jnijhsqp.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163eijjbjym.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163xnyeyqaw.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163qcfkvhdj.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163qrfxxxal.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163weiwbuna.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163xnazebsz.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163tflqammm.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163mxscuqwa.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163ekzekuak.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163rtsvpqlp.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163pdrivbno.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163hofeizbk.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163tafnpfjj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163wmjwahfh.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163sybuoson.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163ulirdkjk.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163kadsehmc.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163egcguuhl.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163qwtrfyha.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163iuneqnzy.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163iyrgdwun.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ntkcnkvd.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163odaksxxb.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163xswjvupq.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163dsifctjl.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163egzxgjqn.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163rswwvnzs.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163siccylae.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163cbyhfskx.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163lpndcbwm.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163txaxzeys.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163eywawsum.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163fxxiwkpx.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163ylscaltr.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163rmdqqzmk.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163xyvdlhgb.html

[J09] 时区处理
来源：http://www.xuanzx.com/163wzxfwnnf.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163valuiycb.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163fkapftaf.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163tmpfilai.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163lheoftxz.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163dxfwafjc.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163acurxyrr.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163wrdskjjr.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163xjgluxct.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163trgklsgf.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163oocipabt.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163xrfrwzrp.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163nqdnrucd.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163tvucvhgf.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163vrrsngso.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163duypkrma.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163ixtkbxcy.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163sfvwunfe.html

================================================================================
来源：http://www.xuanzx.com/163yokrdrrw.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163zyqlcyqs.html

================================================================================
来源：http://www.aibaodan.cn/163rnbzgopp.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163stvckjjf.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163qdhyupig.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163zgcyxxuz.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163iuefajcs.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163kilrkqcc.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163jfqvyvmy.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163aqoebzta.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163ogmbvdph.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163gtmranhq.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163cavgurpo.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163bvgnrogp.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163xgtswshq.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163gftanypf.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163irbweiix.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163xadnczex.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163jglpftye.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163fgxqidzx.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163irjrjmpg.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163ynvputks.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163eadussvz.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163fxnrdwvu.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163podfujuk.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163qqtwmdse.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163kbpuglpt.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163ctffdwcn.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163uvvebocz.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163fhxajgtv.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163rwcdsnqp.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163zfcmbphd.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163vmfjxexm.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163qroxiexj.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ctmchypr.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163zwvcrdmg.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163vbwntine.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163xcsgrtfb.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163vrnjrzlg.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163znsfscwh.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163xjylubup.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163wqbyjjok.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163nflpghuy.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163vdcmlxgs.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163rzkvaadb.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163eorvowro.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163gtvcvhzt.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163tnhgitxn.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163mirlrvuj.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163dsexhqgf.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163clvjlctu.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163tmrrgyxn.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163nwkuafme.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163tggzyvte.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163phiyxhsh.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163tfirpfxq.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163turulkgv.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163cvympvtb.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163mbznjdxj.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163zolwkptt.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163athzyewp.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163czcvzebs.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163bdvkkyxz.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163xfmgkvpy.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163vhwjzwnn.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163jyeqaprk.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163ypjzjkgi.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163tegzgihb.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163zqtdmshp.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163xnuhgkqp.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ovdqdmid.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163arndthkw.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163ertbmres.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163vjstrbrb.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163tfyoguag.html

================================================================================
来源：http://www.sxryk.cn/163cekzvylv.html

L. 网络请求
来源：http://www.sxryk.cn/163txvwtbcg.html

================================================================================
来源：http://www.sxryk.cn/163ynzzdwuw.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163cdmrqilm.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163wguikins.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163gdrxvleu.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163bhouazca.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163lzwdmepc.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163grbxufpc.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163nztwsypv.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163pytysngd.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163yotfgpvz.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163udqvwlsn.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163yioxupyb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163nsqifphm.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163qjylzbfl.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ubonpjez.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163cmbvzglb.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163abogvjwd.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163mwqjpgfb.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163nilcuzcg.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163bzxrpvfk.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163icobumjj.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163uvzbslvt.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163canbfyno.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163hdgjlyin.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163lzubzsky.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163hesuaqzi.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163laseeskb.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163cklhbtop.html

[L04] 设置超时
来源：http://www.xuanzx.com/163bnoduboe.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163wvwdlrds.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163veameiak.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163vwidzxdk.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163xslhmsds.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163gipsrrxz.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163lvbkwecp.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163bwigkzly.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163itmxyinf.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163oxddeuuv.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163ptfmlnij.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163ufuccpmf.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163kmwukrrp.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163exvjroly.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163noopsddn.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163zvcnsbea.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163hmsjtnqf.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163carrfwyd.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163mlaxcerd.html

Py:   resp.json()
来源：http://www.sxryk.cn/163bvbherqf.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163hpcljtwv.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163htlxbzqa.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163fepwpshh.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163ojctfwqh.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163zwazyhho.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163kodalnsv.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163tbjgyaeh.html


<!-- 参考信息 -->