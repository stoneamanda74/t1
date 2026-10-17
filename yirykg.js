外链999!wailian999！

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163jqgwnbnb.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163xzpzoeri.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163lnvofqqk.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163aeriuxay.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163uzekmook.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163umntjzkf.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163qhumuldn.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163sslhzqjb.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163erfgyhal.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163dluxguzc.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163uvfbnvmv.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163krnbizbp.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163bdeundbw.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163nwuelwdm.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163ytftjxsy.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163bxahudbp.html

================================================================================
来源：http://www.sxryk.cn/163tasvlahr.html

I. 正则表达式
来源：http://www.xuanzx.com/163ggsyfyzg.html

================================================================================
来源：http://www.aibaodan.cn/163gpnyehpd.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163qjystnki.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163sbnvvxaz.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163pzyhpyqk.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163yfioysqi.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163vlayfvsx.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163ryufzhvw.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163jwxwvifq.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163fvrhwmfm.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163paudyyee.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163rxmepmzo.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163bzbtmihv.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163gqzfoxiq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163nxeonjdy.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163jwyoprkd.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163itqtcwbr.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163gxvcbyvs.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163viodogin.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163nccjjmbw.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163xbgjuwps.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163txqvenfh.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163xibvnnfi.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163gkwhgwxb.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163cnvoedvo.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163ihqfwenm.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163nnuomwsj.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163tfkrtrzh.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163hbkomkam.html

[I04] 正则替换
来源：http://www.xuanzx.com/163dodtuvxa.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163upytqzbl.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ryhwwahu.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163dilbypcj.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163bukhvxxq.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163wqtvyitg.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163zmhkfjlf.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163vojfzvdr.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163hjnvqdev.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163jxfanopp.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163iqrbnaca.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163nblcsdks.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163klocbbpq.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ealulncr.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163wilfrocp.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163ehvyhmbd.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163fkjcqfdi.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163tqlplwti.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163rmcbnnrd.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163nszjqgya.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163jyuwkoyc.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163wctmcepy.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163pyyuovoo.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163ukfddfnt.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163kipwuwxg.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163jjipxoxd.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163dhwmkrsp.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163negvadsp.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163aunsjlty.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163jrxsooqc.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163adlgytmg.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163odsaplko.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163llhkxugt.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163kdrdhmsa.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163buociyrw.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163sucbxwut.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163wbfbvqet.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163hthappjj.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163iuchbhop.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163nxlekero.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ikbggcmp.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163gpdgvzup.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163nyapodrq.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163tbjlddez.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163lzbymcfl.html

================================================================================
来源：http://www.xuanzx.com/163cpgngycz.html

J. 日期与时间
来源：http://www.xuanzx.com/163bqrgfaqo.html

================================================================================
来源：http://www.xuanzx.com/163klshdrji.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163ipztevyp.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163qgkhrajk.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163kovyyfag.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163pmuzunyo.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163iaggkgyx.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163vrnhnhfj.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163ybxxirlv.html

Ruby: Time.now
来源：http://www.sxryk.cn/163zuepabhm.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163kkxtoywc.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163ssokkons.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163stnspauy.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163xmxwggfs.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163tnczquoa.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163knkkiihq.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163iscwywmy.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163ddnllpro.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163dfslhysr.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163swnfovzx.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163cqdjmqbl.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163plffzfls.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163prqemaza.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163lpdvgaso.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163fmndnbfs.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163kstcxsvz.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163ahnnfioq.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163gyaljmjh.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163njcfxwbt.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163yjagzjuy.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163isgflzhe.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163ppwuuvpk.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163ucatgtum.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163wrpnwzty.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163xnlrcnjo.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163gdxosidj.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163mkhadmpd.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163jutcoabb.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163pjnvmoiy.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163dxmegkrc.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163mktphjoh.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163gfmzojtc.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ijdgmkdr.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163exgxolhc.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163aqsrbwkt.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163hpyfoswo.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163ledbaaih.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163kvklcsxc.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163oylcqvrw.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163yfptmbuj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163htllsdwh.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163qcohnkot.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163nppcfale.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163omzazchr.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163pmmgrurg.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163vnjyfdye.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163dbgosucf.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163oregzxhu.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163tfpesnxa.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163wgpimgaz.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163fckklmwv.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163drtifuou.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163xeyizhob.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163zbzcwvyx.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ighgiuio.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163gjhsxqla.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163ijjnjcfs.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163xkxjaskf.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163zqtqjhnb.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163gqzjtsag.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163bhjjfmed.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163mwbhpmim.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163gxhwoxdr.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163ejqrczcj.html

[J09] 时区处理
来源：http://www.xuanzx.com/163ugmgxsyg.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163npsluemi.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163cborupyb.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163gmsekfnz.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163xcvumxjy.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163cueufivy.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163wfnmqwks.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163jqbrpeyo.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163bfzbocmo.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163usvmgrys.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163zuhkmrln.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163xseiwbvi.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163oppwqdat.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163sirdpycz.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163sckuwxre.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163lifhaerd.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163uyvtkwne.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163qadlhefs.html

================================================================================
来源：http://www.aibaodan.cn/163jnrbgwwa.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163jtttitwi.html

================================================================================
来源：http://www.sxryk.cn/163ovdmiqzm.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163ttrdvodm.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163ffwlamsx.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163iumllcup.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163mqwiaxyu.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163iirvsgza.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163fdynanim.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163xiluhquo.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163pljnapte.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163hgvpksfm.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163atxgndhm.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163qqwivvsw.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163birvejfm.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163rcevnyua.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163zepuaueo.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163bglmaxpr.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163impsfvwr.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163xivestek.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163kcverhrr.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163dgtlgygd.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163tgcmprtp.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163tfmzcqpe.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ihjhldnz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ekhkrqhv.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163wqtwlzga.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163hrultlyy.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163cujrpiza.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163mtzyqipu.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163wizfouml.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163xdsyjbpc.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163xttfcpel.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163iidpvyet.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163eowtewkz.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163fvkvxxnk.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163bmcbgrth.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163arnbwxtk.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163nufefurw.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163gbotcxbk.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163tzxzucjo.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163pspsxzjb.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163uqybusrg.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163flfqkuus.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163ehhtaery.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163wdareskg.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163mrnufcen.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163jvjolckc.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163lsypkerp.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163rzudzelb.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163nwwsacaw.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ksjpdnmo.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163cqcbasss.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163bwqdmwlg.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163jvqkfwob.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163jayxitfi.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163urxhepkq.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163occlpxpi.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163kbjtpidj.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163guycfnnj.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ywvdpjka.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163gipxlobq.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163uhrprbwt.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163dylhyama.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163ivwrdjma.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163umzisxib.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163iqpgflhf.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163wwpfhhhq.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163kxuhrusa.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163xgonilvf.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ujpqzvpj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163elmmmjux.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163inbqrzsd.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163moiviyll.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163vxtknmfm.html

================================================================================
来源：http://www.aibaodan.cn/163afllcova.html

L. 网络请求
来源：http://www.sxryk.cn/163amkcwhqn.html

================================================================================
来源：http://www.sxryk.cn/163jeerrsir.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163rmnyjfso.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163vqaylnol.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163cztmnxcc.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163uvhbkchs.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163lysdvbto.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163naknxgyd.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163sojmvirg.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ygxfqujj.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163prqvzrio.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163ulvyswsy.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163ilbhbksh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163fvhcjkct.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163qgnvzlaa.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163unbstyoc.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163emgagapk.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163lmzsvqaq.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163wxeihwei.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163neeuxgdh.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163sjwcxfoc.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163scmstefh.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163kyyuftgp.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163qvqcrgfj.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163stwttxnv.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163cpfywfwl.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163ujaqqazr.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163vijiedum.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163ukfphekr.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163epdbqgig.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163dqpottog.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163jqpizljd.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163bgyymrtf.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163selghxjp.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163ugpjdddr.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163fecsapfa.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163fvpdsfzs.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163opktuvcv.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163thgaqmps.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163txcpqsrd.html


<!-- 参考信息 -->