外链999!wailian999！

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163ibkzstak.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163pypdzpae.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163gnimmjlm.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163dmutrzcr.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163wwfhfyrh.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163cmwumaxj.html

[I04] 正则替换
来源：http://www.sxryk.cn/163lvpuauqo.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163xkrenvbf.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163iojhhkib.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163smvmvltf.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163czoeoggj.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163znxsamhg.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163xqxsmsup.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163zsczbhsb.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163yhejrrya.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163kcnvbhjx.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163rydegayb.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163xtzqktif.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163nfwcbebn.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163rwlmasny.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163djosuwre.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163poduibxq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163hykasoki.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163wxcgxigd.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163sxshnfyg.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ndrtwtsl.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163ekaofwro.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163pdczynhc.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163sxasogvv.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163wdrnemex.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163czitpliz.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163sfjnfybt.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ueichiub.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163emnjculb.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163cdosqzyg.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163keykewhz.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163uffjvvam.html

TS:   /error/gim
来源：http://www.sxryk.cn/163wwxgyber.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163qnsfnyxj.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163mxsczyyu.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163fvcihnuw.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163uoeluumh.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163bnmdipak.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163chjxyhbs.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163jduzolwb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163jotarhpq.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163trqfbfav.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163vdythndy.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163trqpzppz.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163bcpagmnh.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163aspyvhmd.html

================================================================================
来源：http://www.aibaodan.cn/163ssiunrqi.html

J. 日期与时间
来源：http://www.sxryk.cn/163ofbbuwwm.html

================================================================================
来源：http://www.sxryk.cn/163afsuolvi.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163dbnnwwdg.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163jvwdbsla.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163utpzndeg.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163auyuckhu.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163lrwguyrz.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163lyarofzl.html

Go:   time.Now()
来源：http://www.xuanzx.com/163bzogldsk.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163lykjjoxh.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163pjcpqyax.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163ooubpxpy.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163mzxeocnt.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163gpezanmd.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163zqkjuerb.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163lbbmjpra.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163rrpkggyi.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163nzlxlemn.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163zjflnoww.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163ycqudgtf.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163kacvnyfn.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163poicdbtq.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163qprmhwgr.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163wwserzoo.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163sqfbwark.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163tbwxqnft.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163zwduhxxa.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163vekvddxi.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163cmcgqsch.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163ujrqafqc.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163ataeqqyn.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163ykusrcdm.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163zdipknyp.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163cxxzyvrg.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163pwsiikpg.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163rzhvfaqh.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163uceojybk.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163ahftnmhg.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163vlwgmjwl.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163oywbrlpv.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163irxvqkjt.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163swpjnjyh.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163azbpaapc.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163oztvspxv.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163jgpzfmuh.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163ivytlizg.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163apkwdjbf.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163bxocpdrm.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163ohsuhnzh.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163dwnofrbj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163nrktvczw.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163smmipfja.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163jrolcwch.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163bxofgtry.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163xxrghusg.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163npgbkirs.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163yyuscwtb.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163xzvoaeti.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163snuqnyib.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163gcvctxwb.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163wvmvupys.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163tdwfjznm.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163vcvwaqfb.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163vomrzqwb.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163jtidjqoa.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163dimynpah.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163qpapzkgm.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163xqckzsmd.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163trtplvxi.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163grthjgmq.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163wlkuvybm.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163fsgjugar.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163bvtxbnse.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163cpydgrsn.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163kmeyvhrx.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163gkwcctdh.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163wzejabvg.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163cownscxp.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163wckozssu.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163jsypgqqc.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163hmtpcqtg.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163svkefssm.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163gbcodtfj.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163zikoqjrc.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163vdqwygik.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163lznjlszx.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163fjjjihgm.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163bcusiiel.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163qinxfuos.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163zckqfqgl.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163ydokthyr.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163binkmvml.html

================================================================================
来源：http://www.aibaodan.cn/163qaqictqj.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163ucqqrfuq.html

================================================================================
来源：http://www.xuanzx.com/163qxzlweog.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163rdonecmr.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163pyvvkthn.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163wrtcsxlq.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163xboafncw.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163njsrluht.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163ggyhjbqh.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163lrnukqbc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163ltgovygy.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163qvdrnydd.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163oapactvj.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163tlrjgykb.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163dxzbswno.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163nebkdxal.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163gyjolcwf.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163wqkpiesa.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ikzgzcmq.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163bhhxcloq.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163duvdvpnp.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163dlbzpenp.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163fzrztagh.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163hipaumlw.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163xbygrefk.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163kzrawctu.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163owscmejo.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163izzkzjit.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163dufabpdv.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163slqhhcqt.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163cfnivwmm.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163bnmcjmcz.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163rduaggfl.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163rlpkdbrw.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ewzatizk.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163skwlgwjw.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163sivvkmzk.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163dwcksrki.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163xkgjymop.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163ibdgahvn.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163rckhhpzr.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163mkacxxhk.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163mffzboll.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163gwuqvbeo.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163eyxcttoi.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163bqtnnmje.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163oqceygpw.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163nnxsdgbl.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163ffjfofdg.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163knhggjmk.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163unmlvvop.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163pszucljr.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163rtkrqmkw.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163lgyogvcz.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163fewkifeb.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163dvgblxyq.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163eujranow.html

[K07] 进制转换
来源：http://www.sxryk.cn/163wybpomul.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163zlclnkst.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163quvdhzcw.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163xikrawzw.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163qdhpxtjw.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163qjspcshw.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163steduphf.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163pjhuwdnz.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163yxhfawxu.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163ocxbvsva.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163vzwkiadr.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163wguwgicn.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163bcncvygs.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163mmikrskm.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163jggqxrsp.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163azuaggal.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163rdtsvqka.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163vpzuvkyy.html

================================================================================
来源：http://www.xuanzx.com/163xwfltuat.html

L. 网络请求
来源：http://www.xuanzx.com/163epfafnvy.html

================================================================================
来源：http://www.xuanzx.com/163ckvcxoft.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163nlsebntd.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163otpnsuss.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163ldguyieg.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163bldzzcws.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163ixwcvdpx.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163wiochmko.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163klctrewd.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163uxkwnzdr.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163mxyclknw.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163ejravwuo.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163dohzxhyg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163qczwjndt.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163lcwgajbc.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163nsoccxzr.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163kwxapuxn.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163pzytfjcz.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163mcsmpfqz.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163vehutjjh.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163xgdzcrsq.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163pztpvaps.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163bsvjogfp.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163uxsgdcfi.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163qyeanqva.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163bgbfsycl.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163bzocltsm.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163csddenxi.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163leyznrdz.html

[L04] 设置超时
来源：http://www.sxryk.cn/163avlbkgug.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163vsrgyjtb.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163dzuuogkx.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163dqqcqvus.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163wavcmcfz.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163tzjvlirj.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163rpjfghhe.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163xzieqbsm.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163qtwfmxqd.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163autxcibf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163uqmqmgwu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163xzrpzkoi.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163clmhrxxz.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163zzxfdtea.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163xpjlzyna.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163zsakafve.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163bkxueznz.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163mqouubmr.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163ezyzjpmd.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163nvthnlgu.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163omaammeh.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163hxpqbnch.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163zmhcykhb.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163qmzlbhhi.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163tqzpyxvt.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163kminhyiy.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163dmwdlvwq.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163osyykgqk.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163tqucytyo.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163ybnherop.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163wdxlnlkx.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163kkiuhkjx.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163fksqewqp.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163fwrswnfb.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163rbpbdjvq.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163snqmwqer.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163asedyxue.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163tmpxlefj.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163jchdtatz.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163msuaxmav.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163zihadhas.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163daikxjvk.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163xtnivbxp.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163qwkybbdv.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163hwkhfhbg.html

================================================================================
来源：http://www.aibaodan.cn/163zucexrvk.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163kmvbudub.html

================================================================================
来源：http://www.aibaodan.cn/163mmeehnxn.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163khvylcxy.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163lhtmulpw.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163xwzoflob.html


<!-- 参考信息 -->