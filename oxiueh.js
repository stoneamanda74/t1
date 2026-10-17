外链999!wailian999！

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163bxtzjazf.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163vydwlvwm.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163gitljjjp.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163pbmvyohr.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163btvgvysg.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163gtzifdsj.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163jpxlqpbe.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163wuvsxcdi.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163mmcqincv.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163dwqcdurc.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163vzvibltg.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163hcauppkq.html

================================================================================
来源：http://www.xuanzx.com/163bguzraee.html

I. 正则表达式
来源：http://www.xuanzx.com/163qwwlsgqk.html

================================================================================
来源：http://www.aibaodan.cn/163uojyxufy.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163jurugndw.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163tidiljcw.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163voarxgqu.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163cgkafnzk.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163xyqroslj.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163rxxivruo.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163xoprofwg.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163xoftvhal.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163oenzowqo.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163qdfurzfl.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163rjprjoxh.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163boxfawtm.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163koycxsaw.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163iksfsfub.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163gqoftgog.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163hzpghapy.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163nsjkujjp.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163bdhhzdjs.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163zalgjbap.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163hbzitguu.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163fgnnbqxk.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163xztbrjru.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163lcbsfbks.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163ilxpyqgd.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163mkggghhe.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163vulvqpuv.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163zugaskjx.html

[I04] 正则替换
来源：http://www.sxryk.cn/163fbszlkok.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163yxdeatfp.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163bsvtpkzk.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163saqywsou.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163fchqwlti.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163yzlhwxxc.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163gjghhpqx.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163tcaxozun.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163niqxpumx.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163pggzfevz.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163kjweqllt.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163jxpbhfhh.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163qfktyjwj.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163xnosvthw.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163kohtfewi.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163nqdmpqvt.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163jdfghmrc.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163hxlifrjv.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163uctvwndt.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ywekoast.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163ypuwscqq.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163inpqbfzt.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163wsvqqrxo.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163tmgnlrsf.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163ntmkfejg.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163rllolnyn.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ddkmyxjh.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163faecnhba.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163hdwswrht.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163ftgcusod.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163iawnrfco.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163zcuphdns.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163dknxjudc.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163htzbhgdu.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163iffrjiaf.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163jckwyodp.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163vowerxej.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163oilfobuv.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163jnpcmqit.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163pruwpibg.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163lzvdmufh.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163ttisjyhu.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163rrgokfvm.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163muchdrai.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163bhzshbff.html

================================================================================
来源：http://www.aibaodan.cn/163ytexnlor.html

J. 日期与时间
来源：http://www.sxryk.cn/163ezjuadhb.html

================================================================================
来源：http://www.aibaodan.cn/163xgehxmkf.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163tzqjjczo.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163vjafniof.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163anfgttdh.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163okpqgrri.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163kemlkcpf.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163dkxfszxz.html

Go:   time.Now()
来源：http://www.xuanzx.com/163wwxfwjuo.html

Ruby: Time.now
来源：http://www.sxryk.cn/163arqdjtos.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163nskmudea.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163vjwebhun.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163tbeznfxs.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163fbydjkrl.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163gaonuqpt.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163fnwiqtuz.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163htyocxht.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163uqphiwil.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163qhrhvywb.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163ejtaqvak.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163egxpuifn.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163wuyirdkz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163etndyfyd.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163titwmmxy.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163jetbqcjs.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163oplgqkbh.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163khnjgixk.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163qbrhciys.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163zpqwkqcf.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163tcomzcex.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163rzlexksw.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163lkijkmes.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163nwixymqw.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163mkunachk.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163hzkswjjp.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163ydymuobn.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163oeswgbxj.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163nzvcblmb.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163lkufastu.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163vzsrowzk.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163txnpubvv.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163gumxmtfx.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163trybltta.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163zkdpkaps.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163xqreoklx.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163bhmzyryp.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163mnsxtige.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163mkksebhj.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163easjqdwd.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163crbqgyjs.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163chfobbxx.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163ldenypew.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163fxnclond.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163fddykdpb.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163uezmxksq.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163mmszbllc.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163cvojubsw.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163vmtlfgxb.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163yxuxjboa.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163peieuahd.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163zrxsxrjd.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163tahtritk.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163armwfdko.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163jfuiqrcw.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163onclcowe.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163rbphznhz.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163irdexvsx.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163rosfslxe.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163pxponxck.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163pndamtmp.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163rqtdkyof.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163xebtgdxe.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163sjpodjcx.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163prtwiwfe.html

[J09] 时区处理
来源：http://www.sxryk.cn/163ctlrivxh.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163wbyxgubm.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163xmgozfmz.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163yijlijtr.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ngsltxpf.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163zbgbdmdx.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163hqevchda.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163ctllilsv.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163bmotmena.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163zfsdylfi.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163trfohtvf.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163gllvynlz.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163ixpfjhzd.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163fpakypcb.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163ghwsaxba.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163fugivclk.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163yjyqnqmj.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163vkyhqiam.html

================================================================================
来源：http://www.sxryk.cn/163stflnqku.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163kbzthkao.html

================================================================================
来源：http://www.aibaodan.cn/163oczgcovm.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163elzjjunz.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163erfmdzjd.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163gzkusrmm.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163jtrfsxvk.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ksmxfhps.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163vzxqdkrq.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163cmctepkh.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163vnigzguv.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163wresnokw.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163egopydvm.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163gimvegln.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163ryyehaxx.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163gaenhzvx.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163niguciyc.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163eucxsdfl.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ueydvpib.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163cbrtjxte.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163qjaavcac.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163tvexaylo.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163simloeay.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163felaifbq.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163gbasseca.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163agrfoknw.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163xayeicsu.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163zdrdiroi.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163htbdywkf.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163ltunxmws.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163xvbpctgs.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163jqengaky.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163imppdtvn.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163negpbxzc.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163bzdfedpt.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163bobdtlub.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163dunwusue.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163wtixpeyd.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163zaewbapt.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163shhnmvbz.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163kpdlqczx.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163imvcfzpb.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163tapiuact.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163pabqbjnp.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163ffitekwk.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163rldhzzik.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163xlybhlen.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163uqqmrddp.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163dczzimqw.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163hqreymkv.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163gzijwewj.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163wcmkfubx.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163yoeykdar.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163jaarcjlb.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163htmmsadw.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163aeeojnwn.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163togmcrnh.html

[K07] 进制转换
来源：http://www.sxryk.cn/163ylntfein.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163eunlnetx.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163xzdsrgzm.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163yvribhmn.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163hfunmsec.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ijakmncc.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163mbxbpkbd.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163vbejjbzu.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163ffjhtcjq.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163hbjexyna.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163usyttqua.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163oewokyai.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163hnqzezyz.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163bphwcttw.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163vzqsevla.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163fhacdhtr.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163vpopsdmf.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163qwqfuijb.html

================================================================================
来源：http://www.xuanzx.com/163mdndipay.html

L. 网络请求
来源：http://www.aibaodan.cn/163ggmmwmbt.html

================================================================================
来源：http://www.xuanzx.com/163fwjsexus.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163pgrhjjij.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163lzdvwbpa.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163bntyhnhf.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163abefhysl.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163odnoxakf.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163srwmvflp.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163xxeisyig.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163ixixgtlu.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163twdipyfb.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163ftjgkqbp.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163lqrujgef.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163onryocow.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163cyakpiyn.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163agjvhlai.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163flzwxceb.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163sdxsinhp.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163wqrtwiil.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163prurfcjx.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163aikickxp.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163rxjzlpws.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163cmbvqozm.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163zojgtzvj.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163slggksaf.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163uwsbelbp.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163bfsaswno.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163yabiqlkh.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163djnvvfrh.html

[L04] 设置超时
来源：http://www.sxryk.cn/163jvnjkyvy.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163wamuqrrt.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163dohevvtv.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163kgwilqyq.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163vyznnkcs.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163wpgskjnn.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163rrhtooap.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163fxnrgluf.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163iwwsuxny.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163bvixdrob.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163aimktjmy.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163ctunrvrc.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163fbetbobk.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163qfihhtzz.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163plzhesgp.html


<!-- 参考信息 -->