外链999!wailian999！

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163himoroiu.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163xxdxyakj.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163fghsyvbn.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163hnrenzmc.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163jjdjtlvo.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163ktaxlhgh.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163mawiyxsy.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163ktchkeuc.html

================================================================================
来源：http://www.xuanzx.com/163skscrrvx.html

I. 正则表达式
来源：http://www.aibaodan.cn/163evelomnr.html

================================================================================
来源：http://www.sxryk.cn/163mbakyqnv.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163kfngokwt.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163vegwuruy.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163xdeerswl.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ltssqheo.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163parrtmgw.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163owwqccef.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163olowcrjv.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163zesannho.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163gzufkwel.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163gicstfya.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163yezqvicw.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163yuqhsmgs.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163qsjnypkn.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163vjhyfsxm.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163xhboauss.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163mhjkhrhi.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163ivjowbgb.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163zaoknvca.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163qqzpskqc.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163akagtfkk.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163vtvcwjbg.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163rbwkntkj.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163utsoeojn.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163djpdgzog.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163gyjrnlpb.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163qxzvzikj.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163wnlcakck.html

[I04] 正则替换
来源：http://www.sxryk.cn/163ptbnnyip.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163xieozrwi.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163isxpueiw.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163lbqxtwos.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163jujnyibs.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163afzpsiyk.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163qukregfy.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163emsstumy.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163uowbrnto.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163frpgrbst.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163qmuxraei.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163nuutzwew.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163eocbarsm.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163pdzwgepc.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163srsapjxv.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163kayvdufw.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163zzilnwcy.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163yhnfhtsv.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163zvetcwbd.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163yneogqah.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163dlvrwodr.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163uhfohhlm.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163pigzmvvz.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163nlrvvysb.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163porackjz.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163eqqtnfpx.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163snenlbri.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163gdkipqeg.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163yuagwdkv.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163ypksduwh.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163xdsouyox.html

TS:   /error/gim
来源：http://www.sxryk.cn/163ptpiwykq.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163oayphvcu.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163avnyazll.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163ufxuusoh.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163kcewqlsp.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163ovokedll.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163atishpej.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163yrbxuhim.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163cztjyaou.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163hgzehqgu.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163mmnymdsp.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163pixkoogn.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163lbgbtrws.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163bpkrvswv.html

================================================================================
来源：http://www.sxryk.cn/163elfycvlw.html

J. 日期与时间
来源：http://www.aibaodan.cn/163cohiwoel.html

================================================================================
来源：http://www.sxryk.cn/163qwfgtity.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163ehulnspl.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ugjihmtw.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ekvsgqmq.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163qlfxkrpa.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163jfneqexz.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163qtearfoq.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163jssbbcfx.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163ucsdkoji.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163usgjqyqy.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163tihycppp.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163websnpjq.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163lvspuxju.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163ofievgli.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163pyozpuod.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163unosyplm.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163pxociwrc.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163yeusbhal.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163vqvtcokf.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163xwypzdkk.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163ktkpmarn.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163ppybdowk.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163dpbzteox.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163efizgdii.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163wlccblhe.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163fkjjvusr.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163kxxjhqif.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163izeiezgk.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163lwhpbfvc.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163npznfkdp.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163ihqmglrc.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163yetpfnpn.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163eobjixsk.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163tiijtccx.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163ivwkoofc.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163jjgfwocw.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163vrzwoulu.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163abvkndhd.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163luxuzdkj.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163hsggoprh.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163fmxsbscu.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163agyhxswk.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163fephkpoy.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163adaohhtm.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163mxgpgktz.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163xxtkqpxr.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163tuwwpsyu.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163ebthiust.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163fpjuheeo.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163luhwajjk.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163tnxiuazt.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163lpesjqyj.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163loosgktt.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163ydtigamz.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163pxgkeqjq.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163afnzmsxk.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163pzyajjox.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163wpoulpve.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163lqxnddrm.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163xkdfqujj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163hwygmoxk.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163dvslherf.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163vabedpqu.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163pyaoksbv.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163gxbjcvrx.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163xhmqeasa.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163uleunvgf.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163gjuxytkl.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163faohcump.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163akabpmot.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163mrthjayc.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163jazqddwu.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163qobdrnnk.html

[J09] 时区处理
来源：http://www.sxryk.cn/163wcosqiyy.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163hdivifjt.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163htdkmfph.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163lhhbcxpb.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163xtecgows.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163cbfojavw.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163yseictty.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163ernnmswd.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163xphdvzni.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163wazxsecx.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163doihlwww.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163kcqfklvr.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163yrytiyou.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163qeokkrsi.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163jbhttqux.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163oekzjdns.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163zvinqivw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163pubftgnx.html

================================================================================
来源：http://www.aibaodan.cn/163kvrcdwvk.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163zwixzswm.html

================================================================================
来源：http://www.xuanzx.com/163skndmjcd.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163gfzircnu.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163qbvwedyw.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163dnmwlhbi.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163yjgfyccn.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ozcfgyhw.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163hfmevglp.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163erdtnabo.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163agtvdunw.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163qhqevfbl.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163hgxtxyqc.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163hvkyqkgx.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163ecflplbx.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163qkcyggzq.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163fauuxfnn.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163adrsytgu.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163hydxaljj.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163ykirjucr.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163vlgegsvf.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163sydmgrzd.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163xeyuhuft.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163blayhzys.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163lahlfupf.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ierbtdea.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163mdaotoip.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163losznczj.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163tuhlvple.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163mjonrifc.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163nosdwcik.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163vsqzkthz.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163zzlafrbu.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163oahxxymy.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163hqlzxtdq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163nfusvhxx.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163jhxrvqyv.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163fqrkkjhb.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163hjatbxal.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163zjxysfsn.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163bzopmoou.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163qqidclhr.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163txwuvyag.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163oqtilczv.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163kzhmbwxi.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163zbqyqpab.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163uuedhoro.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163dfrsekqb.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163ekxnrmiu.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163tkhymzvc.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163mrdagjon.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163wfydhmfq.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163papjaexw.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163feyhgnsf.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163soodwtpm.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163eflndpip.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163bkypkfxa.html

[K07] 进制转换
来源：http://www.xuanzx.com/163aydabtjt.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163ydntctgh.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163enbhrish.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163urhrzxfw.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163nfclyvpu.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163aihphjxc.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163uidrgzpx.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163ryieepvj.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163wunywxbt.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163zlvuyljk.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163wmyjokid.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163nqreonzs.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163nxposeij.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163idmohjbu.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163pimrgeuh.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163ofwumnyu.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163cifibajh.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163kvuupcgd.html

================================================================================
来源：http://www.aibaodan.cn/163yubfhewf.html

L. 网络请求
来源：http://www.xuanzx.com/163rqowoklp.html

================================================================================
来源：http://www.sxryk.cn/163jlorircf.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163bbbjjkul.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163ppjhdyqh.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163ckgfiyie.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163ualjnwwv.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163zldalmmm.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163hdbgmhsy.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163qpwbmrjf.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163nhihdtyb.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163uhvlzsse.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163fjcngrvj.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163ydbxgukc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163lzinqttl.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163yiatqhla.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163bopnhwjs.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163hdkmxwiq.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163warlslbj.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163uqmfbtph.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163jldntbvt.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163dpuhxmqo.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163nabiqvtp.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163nlarybdt.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163aigixjak.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163hynegmiz.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163rqelslvi.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163thphnwvv.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163cfbudcfl.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163udfifupq.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163sgtrpixc.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163nxcwlksd.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163pjogourp.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163xneyszqe.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163dmwfdhtc.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163agmmveqs.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163qcvqcbap.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163dpvutjsk.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163zfonwkgo.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163tsvplmbh.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163itwskors.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163jepmkgsj.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163lzwewlrl.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163jztfefni.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163didulexe.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163egzzocsu.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163aubdzlaj.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163ullgaesl.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163dklfzgcn.html


<!-- 参考信息 -->