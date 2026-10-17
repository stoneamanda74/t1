外链999!wailian999！

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163aqtnmsej.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163ufwsophw.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163bpwizpsh.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163idghjkfq.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163sphbgvel.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163edymznmf.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163dqloegpe.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163cqlnbvcu.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163qonnmmpx.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163wxwysjwn.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163nvcojkbd.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163quietmot.html

================================================================================
来源：http://www.sxryk.cn/163oatwfvxz.html

I. 正则表达式
来源：http://www.aibaodan.cn/163skyjoqog.html

================================================================================
来源：http://www.aibaodan.cn/163whlzcvvk.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163qtraiqpv.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163dglaeyjd.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163cmdlvosd.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163naajqsbz.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163znhonciz.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163aepekjoy.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163gosjqylb.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163bmzxudal.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163ebiecldv.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163letdaukg.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163jhevnzjs.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163vgkdzslk.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163mahptejr.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163fcxexsan.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163ttrtmsbb.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163mjrtzmxi.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163tdnhfsam.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163ueibkykt.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163vxoyfjcb.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163gkinfzyb.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163yclcwutz.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163jlaqxqnl.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163khhcoctp.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163ckeibbey.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163yijrhejc.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163siqpawzr.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163uufscbjo.html

[I04] 正则替换
来源：http://www.xuanzx.com/163ibnzqnoz.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163bqdqyvbo.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163ozgmkmui.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163kognxoty.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163nbkqsgou.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163rfjtgswq.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163rlgwyudu.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163amosukvr.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163npnzyvzv.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163alftrjav.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163ndgxlhdx.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163fzemrygt.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ogtasqda.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163zvnojzcz.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163bwlucuen.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163uhhoywze.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163tmtgukcm.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163auuxftab.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163jovmeods.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163widzamrx.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163rgtlidcd.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163otbsigzz.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163uunilpct.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163lahuqezh.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163kmmfuzyi.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163rdvicjua.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163xmbburhi.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163zlhmuvbo.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163eowcnyps.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163fkqsbhze.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163edqckxam.html

TS:   /error/gim
来源：http://www.sxryk.cn/163icdiwcun.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163pcsxyvew.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163brgzrzrk.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163vinmotzl.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163vvwxumix.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163dsrksqik.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163ajewddao.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163akdssagl.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163xkvezhsh.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163wkthbhvs.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163hlzrtolc.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163wilmscqs.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163zdscnwei.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163pybtmyxn.html

================================================================================
来源：http://www.sxryk.cn/163agjjhrlb.html

J. 日期与时间
来源：http://www.aibaodan.cn/163uzctzvrr.html

================================================================================
来源：http://www.aibaodan.cn/163svnmfsjo.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163tytoetne.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163nuewvxyk.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163pdtavsdj.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163znvqloom.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163bpxdnawk.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163ycfjjhhm.html

Go:   time.Now()
来源：http://www.xuanzx.com/163aaeqkdhj.html

Ruby: Time.now
来源：http://www.xuanzx.com/163ycjcnwzf.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163pqggtjdw.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163eomnonxr.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163jvxkqsrs.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163vnxpntoc.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163bduqxwbs.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163ttjvfelb.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163devpbags.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163pywqatpi.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163evzmjmnc.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163bkmsehaa.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163pyzcyyih.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163lbuqjvon.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163ateunrjz.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ospasaln.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163uvmhxtun.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163tkluwkdc.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163ngrlmwub.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163mtzpbpui.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163ahnswbyk.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163iydayjgp.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163mxfknaxw.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163iqyvjqkq.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163uyuektxo.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163ykleskzg.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163vbmugjxl.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163hidrwnue.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163ymumjtuj.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163czbxlpbz.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163fhjvnlro.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163gzgftdbo.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163pnftckpz.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163gpesxezu.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163pvcugvgx.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163mbhuvpif.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163qvistwtz.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163oaztszen.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163befkalwu.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163ypznqnwc.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163pafkcbdn.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163jcxcqrzs.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163jjrcvsdo.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163lbjnifby.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163xixglrwe.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163jppmnjtu.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163rmzecbfn.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163tattedhb.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163xmrlaori.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163nknmvdfy.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163wuyunwae.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163jdxhkbkn.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163tpjdwbdq.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163swhseynn.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163cdalhrbn.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wypljucj.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wtoxrtdt.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163atshkitv.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163srbzdbyi.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163hqdukocm.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163ywdxqewd.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163ubmjcqlu.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163ydllvujg.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163ylkeaarz.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163erzpdycx.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163hvwizhtx.html

[J09] 时区处理
来源：http://www.sxryk.cn/163niunsnsl.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163foqttbdy.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163xygmgkuk.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163wurootih.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163uytzeubu.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163tznjsmav.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163uegemjhd.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163bdceevyg.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163lnaetnvk.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163auxuyjif.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163xtkblqpi.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163lwcehobb.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163sexxrptn.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163gattqrpq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163oqnthpyb.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163iznuplar.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163ysnoprou.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163olrvubxj.html

================================================================================
来源：http://www.xuanzx.com/163zmhvhcgj.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163utugjgwt.html

================================================================================
来源：http://www.sxryk.cn/163knxmexju.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163kfstxgzj.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163mqsapoof.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ixklgyca.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163dsccsbzt.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163wsmedtkz.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163hqosiojg.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163ypdgciqh.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163ioztvrqs.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163akzqqrrl.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163pmscvbeq.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163hzgastjb.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163coqxqvzr.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ksyxwbew.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163dtdvhpaj.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163jcojjdrz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163jsvhsthz.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163dhtxvymu.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163adapzlmd.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163ltbypabl.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163nhphctoz.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163wmwcvngj.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163houzilai.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163zkffczmr.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163oftycvwd.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163xibmndfs.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163fdtbvgkd.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163rnanhnez.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163stupbtdk.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163gjmzfgvq.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163jkwmurvo.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163smiacihf.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ktiijatq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163ujgqngsa.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163rmnbtbwy.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163chheftyq.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163jpsykefa.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163wnpobmiy.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163jbdzbdcs.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163bgbzbozi.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163letzwdwl.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163nomxfmbf.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163dccbgnid.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163ikcirrvj.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163owhtqwrk.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163hnivcrdr.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163hytjfbct.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163ftesrjup.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163qzeuughp.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163fehzcvwz.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163szxlojel.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163yvgntanj.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163vbhfnmiq.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163teowginw.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163fqlsxpld.html

[K07] 进制转换
来源：http://www.xuanzx.com/163xxfsniiu.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163tcmbjjur.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163nelflytt.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ioriyccu.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163nqoyhcys.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163eznbpnrx.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163kkzasoxa.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163xwhkkree.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163gtgpionn.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163spqvygsr.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163oedqxgph.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163bqkppptz.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163rjchbuah.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163jjqhysrb.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163vbrfwlbw.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163gmabjdpe.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163pxfidrgx.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163etaxgcrx.html

================================================================================
来源：http://www.xuanzx.com/163rupfmwwk.html

L. 网络请求
来源：http://www.aibaodan.cn/163anryfgoh.html

================================================================================
来源：http://www.sxryk.cn/163lepjpipp.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163ctqtyvob.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163yaobevhj.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163zxcwxtwv.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163usclahhy.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163bqtnvnsc.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163qanxzaxu.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163upggvzlv.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163oqmtbslk.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163mmmmvsaq.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163ffgrqcxd.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163urpnwbml.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163xxxtcjuh.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163gpwreebf.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163nobbykwx.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163siygdvkj.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163rydgirhk.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163yfwqhkov.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163wxsxmpzq.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163bxmrqqjo.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163irrjgnem.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163ssigrnvm.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163bflrmhzo.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163zhrgnjvv.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163oipyyvnb.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163ytucqqmo.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163cokknnoj.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163bctjvlji.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163mkgvrlbp.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163sxtadboy.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163tmsbsanm.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163vfaevota.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163donntzkx.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163ngnnvgoy.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163yxaaxmbf.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163uustgsnc.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163dmpyyxfq.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163gcixuxri.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163lijjsdwd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163aifalybx.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163lcevirgu.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163xilmjygc.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163tkklvnhc.html


<!-- 参考信息 -->