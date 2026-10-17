外链999!wailian999！

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163clrlfjkm.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163ccrjhvhv.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163kowlbqng.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163tbolxdnp.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163kgxnurjc.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163wxcabsov.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163xblnbtil.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163jswbrtka.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163uwtdjadi.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163andjsgej.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163tkhqlnbx.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163isdxvban.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163zmvhnwoq.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163drwwjoar.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163dtevjypk.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163zaetdtgm.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163gzdffmvz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163lzmvacsu.html

[I04] 正则替换
来源：http://www.xuanzx.com/163bmachvbi.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163ceycikzz.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163stltpiwu.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163uzqunrht.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ryflqlwq.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163kliorpzn.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163urfvmofj.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163hnuxahua.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163jlildztv.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163ckwstbpp.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163vxmvqamm.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163zridvxeb.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163wydaoigw.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163xnjfksft.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163pcqugklf.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163ktbgbuvn.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163mxnyehxh.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163iahpilye.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163kyygxsaw.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163zxxoqtdl.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163oapkvruz.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163otqnkrki.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163onuqumfe.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163ezdtquyz.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163drugxpld.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163ubjxswuc.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163flsdqjas.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163dkwvmupi.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163oaanqkuu.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163xdpijkba.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163klnxijmr.html

TS:   /error/gim
来源：http://www.sxryk.cn/163nhxcechj.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163efkiyjjm.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163znfoijgp.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163yzbxxjfd.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163atqopdpl.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163fnpckars.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163vyybaqpx.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163sjitqorv.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163feonkmfi.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163iuxwabrb.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163uxunbyzl.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163utmyfzdx.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163izkbhlfe.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163roepblsr.html

================================================================================
来源：http://www.aibaodan.cn/163xchdofnj.html

J. 日期与时间
来源：http://www.xuanzx.com/163bvhebdau.html

================================================================================
来源：http://www.xuanzx.com/163qdaikggj.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163umaxmrii.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163tyfqvxaa.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163vutykgti.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163iifcncis.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163iigsqhnq.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163fmdefvan.html

Go:   time.Now()
来源：http://www.xuanzx.com/163uvbzwglj.html

Ruby: Time.now
来源：http://www.xuanzx.com/163gmdxznvx.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163qobfhppk.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163jhycepjp.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163xykzbstr.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163xifghjug.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163nienxycd.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163sldbmmay.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163mdevnhzu.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163kuwcsxol.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163qqbrivbu.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163elvvtfwj.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163clunykog.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163bkccswdu.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163zlymvfzg.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ywzrnlnx.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163iorqmnwk.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ncpkhjco.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163kklnbbpa.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163komqidki.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163nanrhurr.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163fyxevnsp.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163uhsdvmng.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163lusgplts.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163zccvkevy.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163eilhojva.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163wxgvkhvm.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163zeminrtk.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163wrpqrsho.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163unyyvcaz.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163jacuzhyn.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163obyussch.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163upzlqtkd.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163zrwleqss.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ipccmdss.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163zvvzpjjd.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163jydtouqd.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163lelnmlev.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163tjzqamxf.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163ysmvrxrn.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163cqxxhejl.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163evcesigi.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163ijxzcqbe.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163nvtjgcei.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163mhoirpsp.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163ggxiaqnc.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163nterpsty.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163gjuzamxv.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163ixtjgugm.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163dbcbzbnx.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163shdmqwyl.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163xmlmorpk.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163eoghvhwa.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163llkkyach.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163zintzfha.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163qpkpphhe.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163rlflhcsh.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163eehrsorz.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163eazijnhx.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163ehgxeckm.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163boeulfsp.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163mzlbkkrx.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163rpgknqvo.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163epeigdzl.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163pokcpotn.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163wlalzizj.html

[J09] 时区处理
来源：http://www.xuanzx.com/163aogsuplh.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163rkayyots.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163aobwmuwc.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ewvmxmyx.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163yvopuaeq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163ilsqittr.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163hiwyxlis.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163pxfjrnxi.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163ilawfwst.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163fxgshcxd.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163iztaghai.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163ipqkhrti.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163ssxztzyt.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163khkvruky.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163zavonvty.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163crporafv.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163xyampcfo.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163djqvwqoy.html

================================================================================
来源：http://www.sxryk.cn/163txzdlrsv.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163nrvkugll.html

================================================================================
来源：http://www.xuanzx.com/163ncdvfhgk.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163syxrsttk.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163leaawlak.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163igjgvsaq.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163nfzfwxmq.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163vbaeeqyr.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163wnkmgxub.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163tlexzedb.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163ylmemhpv.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163fbwewlha.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163wxbwwecy.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163zrnnqnze.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163yqhssdox.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163vamcmfqu.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163srcrteam.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163mfdjpekp.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163sjzlhtjz.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163etzzrkvb.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163qjymiimp.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163yjokcxqo.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163feyxxqbv.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163xjejgtfx.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163dwlwocuk.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163nenuuvhq.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163lixundhr.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163rpeozhdy.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163iksjjcwt.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163cnbmssgx.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163fymbnmwi.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163lamnwuxn.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163qhutqrjd.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ipgjdjji.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163lovbfqpj.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163coqwwbbx.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ifxrslxa.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163asrvmfgg.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163pffxdifx.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163gqofpbok.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163dxykzgcv.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163hmepfgzl.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163udvhedkj.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ruuyzaiw.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163rvbjvxqz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163amkessge.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163npberxsw.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163cvwqjljz.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163lhcftexz.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163jqnttdkc.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163wsnmevgz.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163khvlxwny.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163dmkzbkpv.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163jhlekmlq.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163lagsdgxc.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163uwymwuss.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163kodvcpim.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163iprkcwep.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163mxrbbmwb.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163thyoyoym.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163pcywhhsi.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163glyckuau.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163iafpeovu.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163abbaihcn.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163ljenvfnv.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163rtoxnrun.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163hqcegojj.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163tanprimw.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163xnhtollk.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163berfbcwu.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163fwygjwji.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163chpmoyvy.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163wmyiwztc.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163msvoizxy.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163elmflfxk.html

================================================================================
来源：http://www.aibaodan.cn/163oyyzguxw.html

L. 网络请求
来源：http://www.aibaodan.cn/163gxqunbel.html

================================================================================
来源：http://www.xuanzx.com/163qgewwovi.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163hadzgyqf.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163windevxo.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163ypmvktpg.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163taqbzjjs.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163imzhcwlg.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163fqbottcp.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163eirzrzwt.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163bwyopelc.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163zrxoqaoe.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163mvpxhhot.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163omieyiws.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163aqdgetpw.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163svjjxdfu.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163gludmtdj.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163wwracurh.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163tlgrtptm.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163jfdgwckf.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163lamncmbg.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163xsrqglum.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163acvymprk.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163ugynujde.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163nqhrmorn.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163jleyelth.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163tkkoymxk.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163nwfynroe.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163rwcjlobx.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163wnfrgskh.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163gqdqdfdo.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163madgdeqg.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163pmenkfxd.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163snpvajgk.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163jtdaygqy.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163oefuqnbp.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163yqebgkqr.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163jrqjiirk.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163cpxbdxjd.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163cjojefxf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163laeakxzp.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163jkvcrvvv.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163nbajgavw.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163xkzhzxqk.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163ytouiecb.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163ihycnday.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163iwxrjjcx.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163xbukxccf.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163xdikepoe.html

Py:   resp.json()
来源：http://www.xuanzx.com/163fkevwujt.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163iiotudli.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163epgchkgv.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163bjbusfvm.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163lsehyavj.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163ejtkkjvr.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163roancant.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163zweoihqb.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163zetlglbu.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163jcurgeqd.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163qzbbayre.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163smdvcdee.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163yktqgdod.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163rwcuuckx.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163niwmmzjd.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163hzgmlrvf.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163tclicimi.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163mplubqcm.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163lhwrkaar.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163rcbtqwpb.html


<!-- 参考信息 -->