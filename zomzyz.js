外链999!wailian999！

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163pssmrclt.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163juecscvi.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163uzkivfps.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163byjllbcm.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163gwidjfmo.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163bxviuxxu.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163fnckkvnk.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163hiekiedi.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163zwermbsz.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163gvibkkcn.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163rfxwhjer.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163gddnpkrx.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163nhuampjh.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163ztvdnkyt.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163huzktbhv.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163reljsfrk.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163hqknmqgx.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163qqkkmnod.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163etrpsrcp.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163devxultl.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163hgilabgk.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163pvrxxhfp.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ffdpaqds.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163lrkolwgl.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163hiccgkpo.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163zleejaya.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163nfsxprig.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163kdlljiwt.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ynzbfqky.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163ipvjaabt.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163yxuujvjf.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163btxqcfqb.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163jkgylfxd.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163ceeolklr.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163myyriuaw.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163efaaairf.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163uuefsnct.html

TS:   /error/gim
来源：http://www.xuanzx.com/163pkxytrgz.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163isxdwykj.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163iftpskti.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163cbujtrwh.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163ltyyvlok.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163dlmczcdh.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163dpqibbrc.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163eojzdgvc.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163rfhjedcl.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163rqfhzcrf.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163gnafmczx.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163goggscxv.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163orgiffsm.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163zcsyalno.html

================================================================================
来源：http://www.sxryk.cn/163bucgvazt.html

J. 日期与时间
来源：http://www.aibaodan.cn/163mzkfzjtu.html

================================================================================
来源：http://www.xuanzx.com/163whqzyxxq.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163jluwtxcc.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163jnpqztho.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163sfyciewc.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163gsetmfpe.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163skxcrjqw.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163bjfndxvy.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163wgycrsap.html

Ruby: Time.now
来源：http://www.xuanzx.com/163pzybwcll.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163cufgnsvq.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163wimpgvhp.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163yoftsjeg.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163cqdfkqjz.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163cwqxfmrw.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163drnopyvd.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163sxqazyvf.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163xlfltzfx.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163xqsldtcc.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163yswgbtvk.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163vixjnesm.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163kacpnxhx.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163vnegqmuc.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163dfpvihir.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163yazmmeqk.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163krzuyumr.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163arlwzdpb.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163glzjdicb.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163vexjuonp.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163lpowkjfh.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163lafbrzzf.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163vwxdtkin.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163qecgklnf.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163jshujsta.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163xtwtypdi.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163tzuutzua.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163juvzzabf.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163cwurgjjp.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163xukyluhm.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163bigxgcgg.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163hbtyblqq.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163imwoizfu.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ptbnadhi.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163djbzppbe.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163wvzckmtk.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163yckgqlvf.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163lqbvsuxn.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163kgjzzlio.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163ojpcprfq.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163ukzyvqoo.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163txmuwley.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163yaiznbkz.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163viwjaimg.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163lqbktrix.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163hiwaefja.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163apvsroaq.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163tvdsupsu.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163esxmskco.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163sfhbtlsz.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ugrztiin.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163cynftxij.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163ekltktkc.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163brjkadke.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ocuivsmj.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163nfrsprol.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163insmblzq.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163khjundbd.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163gchqnlme.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163plzhnxnz.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163xxqxftzz.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163tzseuivx.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163fnlbuopl.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163pmqtoklm.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163fuuxricu.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163pzcgxdlr.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163jkfsgdqx.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163ikbhncst.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163mglzlbcs.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163kglqizwf.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163klalpely.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163bvqlnbay.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163pvlscivq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163qkkrbtrt.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163opeecgjv.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163bljujnmk.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163shgvipyo.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163dcypiuzu.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163vqbdhxvi.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163yrifolii.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163xfbkcfgv.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163gjltgnzq.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163udkotgeq.html

================================================================================
来源：http://www.sxryk.cn/163mwxzhnfv.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163ypnxsrxh.html

================================================================================
来源：http://www.xuanzx.com/163mpsjcagj.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163tfgrdptl.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163gkgatcnr.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163weswrpwm.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163bbqufcgd.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163jryltmmj.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163bzuzdrib.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163ncpjbnmv.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163qpsdltxs.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163pzfeigjp.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163ciyutacz.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163menfcvds.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163usqwvsla.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163iysltnvw.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163sitxjqix.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163myzkydrq.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163wgexttst.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163hrwrpucb.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163vbtqompj.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163idhoptze.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163qcoqrtea.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163zclmjhqi.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163danvbfnf.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163xgcczkue.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163wwuitowb.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163pgtroqpx.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163talzuahf.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163cdnpdgzj.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163wnxvgyps.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163pioxbyzh.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163koetnxwg.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163bqqugviw.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163qtqgvmla.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163vjbqyyoh.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ufvmkzbq.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163rjmeudxd.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163pdmegdny.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163nzxylpuk.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163xbsvjymb.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163meeboind.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163mqyiidwk.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163tyzpyxxb.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163wybwkutx.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163ljkzmbtv.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163pefkgmqq.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163jivjyvkb.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163qavfaini.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163vcgmjpsl.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163mrtboqyy.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ibwtcuzr.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163bzlahcfz.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163mmbodmra.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163rgtenfgl.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163hskgsjjh.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163rwwsrmyz.html

[K07] 进制转换
来源：http://www.sxryk.cn/163endrzpze.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163ueawhlmy.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163gfhucaai.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163bwxwfzol.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163cuqjuyzc.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163kxdsyuam.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163phssapcf.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163rnllyfvy.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163ybvyugmm.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163dycfskit.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163wfoniphg.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163ezickwtq.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163uxpivlkm.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163hpcczxcx.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163ekbwrifr.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163ikdjupeu.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163mxahheth.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163iyicicjk.html

================================================================================
来源：http://www.xuanzx.com/163viqgnvwj.html

L. 网络请求
来源：http://www.aibaodan.cn/163jqgtkdiz.html

================================================================================
来源：http://www.sxryk.cn/163arrexsyt.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163jkreowyy.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163lnjttsic.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163jzumxigi.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163tvzjlhrq.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163gxyholqo.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163gkindhse.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163sczzmvbk.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163jkkxepyt.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163cvjjhxzm.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163ozfjbgff.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163ijwionkq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163gwjbshjz.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163gkgumrha.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163issacaqo.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163lwhhxybh.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163isytgpec.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163ziirmumv.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163isypxtjx.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163lwqsvveo.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163csdgadyy.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163bujoyjta.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163gqmiyqwu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163pbhccasa.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163mrhmwkni.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163alxatutn.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163bcjtcspw.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163rxkroozu.html

[L04] 设置超时
来源：http://www.sxryk.cn/163hduarfhh.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163qwnrmgsc.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163ypulydmh.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163chshvpgz.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163eoxtgptt.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163xwouoeha.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163hvbxenxl.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163txtmkath.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163rnxxwtmn.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163pdgtnbdi.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163htgdtmmk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163mdwokugo.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163jntyfayc.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163idrlshxg.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163jrtevrsd.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163yoqajhbp.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163xykuyxxh.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163wzzoqsvo.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163nmlhmkzn.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163chchkbap.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163jjwhfemv.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163zbutndkr.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163vzhlztfd.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163pyihmknx.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163pfkpctxs.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163oztjlgzb.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163hcutzflm.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163kdcaoate.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163hxzznlzi.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163umbhwpel.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163iuzcdvlz.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163lxpzyiri.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163dtxukvrd.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163aehwyrxs.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163dwktrnxx.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163pywpkdsd.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163rnzmsjjd.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163lsttrtfq.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163rekrblbc.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163jkxaworo.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163tjzzfhkz.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163iunablng.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163flwvmjqa.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163zvcfqovq.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163jvgoxule.html

================================================================================
来源：http://www.sxryk.cn/163shnopovn.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163npbwiixy.html

================================================================================
来源：http://www.xuanzx.com/163htdprccr.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163dwernndw.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163ewpnxldm.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163xlcvbzrc.html


<!-- 参考信息 -->