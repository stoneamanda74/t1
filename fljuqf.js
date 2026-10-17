外链999!wailian999！

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163agzcihok.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163yrrpkeof.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163fvsvimka.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163btwrgers.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163junyiymq.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163hsqonrlf.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163jofrqzql.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163itdbpbvl.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163ghzynuvz.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163irhglfym.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163qpozoxba.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163zhkrizkg.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163rutlmocc.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163dtbquggg.html

[I04] 正则替换
来源：http://www.sxryk.cn/163pvmgwfjd.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163asupduiy.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163vmwkkcbn.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163jajgaqha.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ywdaqpqb.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163xvzhyrup.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163kwypjiof.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163ultvqnpu.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163dckarnzd.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163pvltjoqk.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163yulggcya.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163nrizbuep.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163hgcozwsm.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163vdpqyvlj.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163lqzoovvh.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163gkrihwnt.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163kghobqmn.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163fmgrymxz.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163wuzrcumj.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163nxqmqlii.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163kqeeztxv.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163tgsyiegb.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163vmzwhaid.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163sowefmwe.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163yhsbqtlj.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163kjyursdu.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163sbwarpjz.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163xsgdhwqp.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163iesnoxeo.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163qafxcsnm.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163dtilazyz.html

TS:   /error/gim
来源：http://www.sxryk.cn/163cwounhla.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163aobvdmes.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163iumgaqax.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163bgkedmuf.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163lcqhibut.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163ylzwcxnu.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163pupocoks.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163sbviedog.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163beyhtjfm.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163vzmbhphk.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163hpzdbbni.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163hyliioum.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163heuyvqzx.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163xihanlyb.html

================================================================================
来源：http://www.aibaodan.cn/163zxokhozy.html

J. 日期与时间
来源：http://www.aibaodan.cn/163isfooirb.html

================================================================================
来源：http://www.aibaodan.cn/163bzgcxdcg.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163tleshhjk.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163rwzjnlgm.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163wzzgafiu.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163pcwnvgeu.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163epkwdgwu.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163ycisxhcw.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163yymsnzhs.html

Ruby: Time.now
来源：http://www.xuanzx.com/163xzgfvyvr.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163hlqueimx.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163mrdimrvl.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163vsihdlxy.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163vquuzpiu.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163ncoehayr.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163ujjgrvzk.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163ypcduhma.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163cwbmdpoh.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163slhfhhjg.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163gmilwcua.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163cdugxqbb.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163zpbqgtft.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163uiadvnsl.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163vnbmdybu.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163cdmdpclz.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163ywtzttfa.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163bnyffdpy.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163rksvoxjx.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163hacpkzag.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163xakrjrdx.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163aoiqqnyw.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163ebdaqrax.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163xtertvzu.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163djmsmaaz.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163jqdgsntf.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163zkqufehl.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163txighpkx.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163yhsnokkp.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163pnsvbciw.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163gdaxnocb.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163kfjqskdn.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163wgknhbfj.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163wxcppwce.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163erclgrqw.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163oivrqaqu.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163ehuepwwk.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163qiyznkao.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163alhsvkzc.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163mnapzqow.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163rwncsksw.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163frxzixxw.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163lhsudbeg.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163pirhcrnl.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163dlwtmpkj.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163yioxrcpq.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163ylldlhnn.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163aihsdfxq.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163wvwrsnot.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163dszrbmit.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163xedikhiq.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163qjlqhsnc.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163ykdwilyq.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163yecmrsnq.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163rekbcsnp.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163gespxzvj.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163kowjmiwm.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163rstcixzt.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163suglapyg.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163gjqduwef.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163icvepxvq.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163dyhycihs.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163eqinnmlj.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163vtdsijzd.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163gfsrdnqg.html

[J09] 时区处理
来源：http://www.sxryk.cn/163wjcprpzc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163kzblvaqx.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163dgniaymh.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163bufadgkr.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163rsxogozk.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163aizdtwif.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163sjfttnrx.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163xjlecjnc.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163ufwzdyfb.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163gcnopgip.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163zoxktotv.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163gsjrabrj.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163kuawthwl.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163eqsicvzj.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163waqbcyni.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163zefvppmt.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163rgrxfklb.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163oreiamom.html

================================================================================
来源：http://www.sxryk.cn/163enzyfitf.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163ycaghitt.html

================================================================================
来源：http://www.aibaodan.cn/163bbfpefuf.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163xykjkcev.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163sngympgu.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163yhekfqgb.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163tqynivil.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163zekqfxhk.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163nqzhrpub.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163yryupdnt.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163vkenfrwg.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163zafalphi.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163chxqnbcg.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163pjfvnymy.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163rdksdtdj.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163jqnjpkld.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163zulmjzho.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163dqknvuyb.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163igtuaupf.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163urnyxdck.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163ttlhnwkn.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163geirquxc.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163drrzumla.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163lylgsawb.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163zjpcremz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163pjdmmvio.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163nddyfler.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163ngaorvnk.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163cwdkcgmy.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163hqymfxlh.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163smggpwze.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163owxpgtbc.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163khnkdmxf.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163njpxpnsl.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163zxhqvgyp.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163girnoafr.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163isvgzbky.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163ygqrrrct.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163jreapcjt.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163ripahfre.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163qlsyosmu.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163eutynqhv.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ocwdraxc.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163mndjnhoc.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163kxbhrtjo.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163fvqvoyud.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163lnqnrzxz.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163qgdpyhlc.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163oxszrype.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163bnqcmqoj.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163nvowvqry.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163efmcgatm.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ypjktjli.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163fggyxrwn.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163ctkaqzho.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163cncmlswo.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163jqddokms.html

[K07] 进制转换
来源：http://www.xuanzx.com/163rjgycjdj.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163cuazmalu.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163qokdewyu.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163whmztnjl.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163xxjzdcxr.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163lpvqjhgf.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163uwsizvjp.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163obsqmezb.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163nbchfoan.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163ftqnwmmj.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163ceiwuwhe.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163gbpmnwbk.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163rmmmvbqh.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163xcpwnmep.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163tmitmzah.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163rzwixuat.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163cjugjocc.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163zfabvneg.html

================================================================================
来源：http://www.sxryk.cn/163gimsuhhx.html

L. 网络请求
来源：http://www.aibaodan.cn/163hffmyoxi.html

================================================================================
来源：http://www.aibaodan.cn/163mfzgwxzp.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163lebvywze.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163jxehstfr.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163sociykpq.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163fuhumwzz.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163tejvzueu.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163kydnzjio.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163fnbofpnz.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163qhpdwxvf.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163vhodgcve.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163uycxgnmd.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163yrqqecni.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163pvhhzjlv.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163hgebgtfr.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163huqvwfsw.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163afnuqeyv.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163avktugkx.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163klmmhztq.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163tlqcycbj.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163sztepeux.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163zfcgeqhe.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163viregaez.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163xkfgjeil.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163gfdcqiqb.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163vouatzop.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163vnncivam.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163khoenwnf.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163iatndbxy.html

[L04] 设置超时
来源：http://www.sxryk.cn/163gbokjeas.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163wqukwpop.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163ofpkcnrp.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163cwbhedhr.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163dykyjdqo.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163sbiecbss.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163nxgxwiwi.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163smsjunuq.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163wkioiavb.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163pmlpqrpl.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163tbdhdbbw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163krzvitry.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163inztqwgh.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163okiyreaq.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163caporzjk.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163zorxmgys.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163uzmtxehz.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163xhtzxeuk.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163rnsexciy.html

Py:   resp.json()
来源：http://www.xuanzx.com/163ooqioens.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163jiftsmbj.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163boxixefj.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163auvwtzvu.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163qaelkhkm.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163reagpukm.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163neecrzch.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163rsfdjbqv.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163wepcqpjx.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163bnccxuvi.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163edyxxynq.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163faobzuvo.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163xbovcvyb.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163usmwrcla.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163prpnixkr.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163vcpfrgle.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163trogrmhm.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163rgsprpra.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163rbyezegv.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163xiyumzqo.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163onskpxgg.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163zhwqievp.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163fstnytfd.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163mzuvggtn.html


<!-- 参考信息 -->