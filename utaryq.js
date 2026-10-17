外链999!wailian999！

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163dtbonchp.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163arsovzcl.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163gyohqewm.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163zllnpyqo.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163vpibpmrb.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163vfvnpxmu.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163sifpdwpc.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163zailgdwh.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163pepfnxyb.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163phdnyhzs.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163idhfwvtn.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163zacodhzy.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163pjqryrvy.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163zdbdytbs.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163inrgnxfe.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163jcpvtulb.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163jyheipfu.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163bbhcuuyz.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163bjfnctjk.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163lkpyxxkn.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163ldcfckwi.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163smolkncc.html

[I04] 正则替换
来源：http://www.xuanzx.com/163ggxivtba.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163mvtlcofq.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ththului.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163jxhbetpx.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163jupeffov.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163riqlcdix.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163qcvaefiz.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163mhomudbq.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163pgbtfenv.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163zwpvcfbp.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163zqjexlhj.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163ygtprleo.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ldjyftgf.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163sbttiznl.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163dffdenug.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163ubtabnhc.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163wjpgxwyi.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163fmtiessf.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163yfevzqjm.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163tuduaago.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163qskrejtr.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163kdbvbneo.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163jexjujqr.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163sgoczuvk.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163dxfeaadk.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163eksrdkuf.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ivaxcucp.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163knevajot.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163gohatqzj.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163ayzhvtfd.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163tuupzbqu.html

TS:   /error/gim
来源：http://www.sxryk.cn/163onxwuojm.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163ttnryznb.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163pfcyvsus.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163qwjkyqmp.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163gfvrcrrj.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163xkqrifmy.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163jknizvkh.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163ttwacdga.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163evfvwtbp.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163vbuxsehf.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163hmhvdjcu.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163xzsaettf.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163xnuvcogz.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163whzwsuxd.html

================================================================================
来源：http://www.xuanzx.com/163bhjqqwsu.html

J. 日期与时间
来源：http://www.xuanzx.com/163fvmftftu.html

================================================================================
来源：http://www.sxryk.cn/163djspwjwf.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163iitpjfsz.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ogxsyhdz.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ohdngxeb.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163hihffhzu.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163qciwximp.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163pzsjldns.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163mdqjqbvd.html

Ruby: Time.now
来源：http://www.sxryk.cn/163qcxvymwk.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163pyyftwmm.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163izfybvpa.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163cdsftmkq.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163kmdhulmn.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163skuugrlu.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163mpsnqnkt.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163dkyzlkai.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163ieughnio.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163jdfouxus.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163jkrunpwj.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163zilrihrx.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163qwmbdfbt.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163qjuuedmq.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163upkxvgkr.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163hkskclda.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163oxqmeyvm.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163matphkjc.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163lflryhbc.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163knqvkfet.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163qetxrcww.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163fpterhug.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163zbpvottr.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163arjsuxxs.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163ypbgzeyq.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163jwhfhgzo.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163yhmjbnkh.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163pgnhjhhe.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163wbwsewys.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163yvfukgeg.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163tlzesqxd.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163mrxfzihd.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163xcepwpfq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163xzvmyspf.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163breileoq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163qklwgvcw.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163nclyfrsq.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163eilgfevf.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163rymednxl.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163inudpiwb.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163xwbjkvsn.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163vrdfrlaz.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163jlazqwne.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163fbxopfnt.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163rhfhdjhr.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163xvkglfei.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163wviwftxn.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163dabqjefv.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163vplgechi.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163gfxfmsxr.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163zmoexufy.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163xgljgeus.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163grukjmya.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163rgvhcjih.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163qfvvwhca.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163sxpbopmo.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163ozuobnja.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163wtbqbtdw.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163ahrntmvc.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163gnooxkfu.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163pinanzvq.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163fprqcywh.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163rlzgtqik.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163cdtysmtv.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163oiqujeiw.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163umwtiqty.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163vjvrolwg.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163paobrwcz.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163bmkzlyjl.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163qubdthso.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163lxlwofmv.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163vsuprjjb.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163vqoyqvrg.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163osxjiwql.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163cpcybjbr.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163icrbftjt.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163rbadcmpy.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163niuaxtle.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163ijguxihg.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163sldmkfly.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163xqfpknbw.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163dffpwwxf.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163mwzzgfwe.html

================================================================================
来源：http://www.xuanzx.com/163nzzvxctj.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163htimzntr.html

================================================================================
来源：http://www.aibaodan.cn/163gofnljwf.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163kbpbnodf.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163rbwzldgh.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163jwklumfp.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163jmjjnezp.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163pmcrjkcb.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163jejnlveq.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163zswukxpm.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163yjlzcbjs.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163gegxaoun.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163dzmgpbrg.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163vglogycg.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163ttnvdxrm.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163qgexdoed.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ayuumtob.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163byinkxbt.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163bfooypsx.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163ilorecly.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163tmdniddq.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163slrlfgbx.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163easdsory.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ekzkvygi.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163nkebqhqd.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163cizgasew.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163gcnguwdz.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163fkqyjwxm.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163viesvpfr.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163iztehpxg.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163ftjvtxis.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163chtypjaq.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163pjoazzpn.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163mtszablu.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163evwumerf.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163lxrpcjwj.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163muscwkqj.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163fsrcaazp.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163lvdwnygg.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163qeovhrzy.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163qpmbjwnp.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163fzmurcgs.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163xboqboot.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163xvlixint.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163rdomvfjl.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163amiiyduu.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163amxnbscg.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163xbbhqcds.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163rdilfhhp.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163zdelmvyi.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163yahaoihv.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163xfdkprmz.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163xqlqzbir.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163qbmbcete.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163numwrtyx.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163zytjjoys.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163fxkakkxj.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163miekpdqe.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163plcwrrfk.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163kdhnznss.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163nxqpzjzw.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163gycdpvgh.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163jtzgpwhz.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163acowrjiy.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163omjkqvpe.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163xpfhjgpv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163ebjvojon.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163qtcneiwd.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163aopgtstp.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163zdildtee.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163pgrbwggd.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163hvipfcfp.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163yuetpntv.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163wusnymax.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163qiwsgwle.html

================================================================================
来源：http://www.aibaodan.cn/163bnlvkpqo.html

L. 网络请求
来源：http://www.sxryk.cn/163qvloyyar.html

================================================================================
来源：http://www.aibaodan.cn/163tauwvorp.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163ltclcrvo.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163cmdvoiyo.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163bxorlyze.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163bkjhhhae.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163fuzmjmtn.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163mfnajgow.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163hwchgiyj.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163ywkeehru.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163qapzwxsy.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163ekxneafo.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163gvxpilth.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163gklawlgd.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163qeflwpqm.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163siskngdd.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163qwmqaqox.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163foqeyzpn.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163rexcyzdk.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163gywlzjlj.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163ydvwjnsp.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163gtapcvjb.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163ykfcgrgy.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163mudrxaej.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163kurhpkcj.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163oirvtezq.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163umouijvk.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163dprrppsc.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163nhofkrxx.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163sbtjwcxo.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163zwwhjmpm.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163rahdsiti.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163umfmctfv.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ftmtelpg.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163ijpmpnpo.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163pchkpirx.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163krdtszbi.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163syuleanr.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163ztawdlde.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163hfoynrhl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163otokifpu.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163hiazsdwq.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163apqmcvda.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163wmiyraxu.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163jqhgqxle.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163wttzucjx.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163ayqpbcqf.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163lfwfxzkh.html

Py:   resp.json()
来源：http://www.xuanzx.com/163ildbhsjn.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163bwlpxsdr.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163ghsoybem.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163boesfofy.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163moewaiyq.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163vfsvctmq.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163xmjsfjvy.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163pcfgqkvg.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163yrmxkjfn.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163dmwlbgze.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163efqkdpta.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163wkhvhjlz.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163zbqvdstb.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163zxzlsaog.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163dmvvciqg.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163vadlngff.html


<!-- 参考信息 -->