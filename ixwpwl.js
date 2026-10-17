外链999!wailian999！

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163vtnglvwq.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163sohbsbux.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163ecwuvqde.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163wlyvomra.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163hnutkoan.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163qmgmgtbf.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163kxyqmnuh.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163dczcjboh.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163mlwpiqkp.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163qhraxdrs.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163kjruvmgu.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163eyhhxvgq.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163tidmzeca.html

TS:   /error/gim
来源：http://www.sxryk.cn/163gjtvrgfg.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163akmnsdhq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163wuajnqqp.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163osnsrtvh.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163notpjfhz.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163tnpuallm.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163cpnbgree.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163voulxjob.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163yiedzvuu.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163kdehytxl.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163bkzunwym.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163trpcqoxj.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163ifcuiqny.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163whovvylb.html

================================================================================
来源：http://www.xuanzx.com/163romnkfbw.html

J. 日期与时间
来源：http://www.aibaodan.cn/163mcegpzks.html

================================================================================
来源：http://www.sxryk.cn/163vxyfshhf.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163jsedykdf.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163otcbhotl.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163jvbiiotr.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163warhbpfj.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163gcckuwex.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163jywglzxr.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163abaylviw.html

Ruby: Time.now
来源：http://www.xuanzx.com/163mntnapkf.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163gvlvyndu.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163kuvhmkfb.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163gujpsond.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163xkdvouxq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163olxomaiz.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163knwacjei.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163ebypquyj.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163lbpmeoyy.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163cjhbafzz.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163plkfiyov.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163edoguzvu.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163taqwopzr.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163mustwezr.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163fdnirnvr.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163tqpiyzcf.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163jivbfsyn.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163vwzbvxkl.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163rmfflcbd.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163lyhxbhft.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163wtqavqsu.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163pdxljwil.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163hmpyjheq.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163odeoeknt.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163oweeavie.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163bhmjlrxm.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163kaebdagx.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163mndftljx.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163zdzrybyb.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163fuqtaenq.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163xzkqlwiv.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163ptpijrof.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163wabegjtk.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163amwhnhnp.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163jbkuoaig.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163iryzekiu.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163nqevtoir.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163esudkzfa.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163oyjszvwm.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163qhgwqotd.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163addutwfu.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163skyghvgi.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163rqcnrpjf.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163ovnxwbjr.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163zyvndsus.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163ohikxhon.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163zzmktduk.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163mfngxaqd.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163smgzyumj.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163zbqvyrng.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ofuhsuwb.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163viuofamv.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163hqcyqofa.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163dxuxjxyw.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163radrnjxp.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163judnvzbl.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163cdmrhozr.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163mpuugxbt.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163wsfwwzsm.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163ttzclkar.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163bphjrldb.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163cymqwcar.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163rdizevpk.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163dhyzzzvq.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163bmiqpuus.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163uvdwjvyq.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163pmgfagmz.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163gjgjrgoo.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163fcavxosr.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163xxlpnaii.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163cyhbicdz.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163dijbxvii.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163mogsozhk.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163ictqluha.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163nbvevpvf.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163vforucut.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163oysfzkyu.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163gtgriysz.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163hkpslbzr.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163saosldmz.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163ehnnyfwl.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163omgnsvir.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163rejgtaqp.html

================================================================================
来源：http://www.aibaodan.cn/163mvskxwzw.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163psviowxl.html

================================================================================
来源：http://www.xuanzx.com/163tpvwhpes.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163mvwxztlc.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163dqnipxed.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163rolzpadj.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163yejyculq.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163oxddujwc.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163dvqdusiv.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163zlmujmlk.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163emaifalv.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163kcsygttk.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163xeznthon.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163xcoiukqk.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163onpbxesx.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163hhyxbyci.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163hvvrrlfw.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163didikwcx.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163szkjqtbt.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163yvcwofiy.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163esxxyvzm.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163mxoqdrju.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163koxcsthu.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163gyrjdfjw.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163xgcnwulg.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163khnfcwpy.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163qcluwuon.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163uffaidfw.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163okmmadgp.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163egemrohm.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163xpgrmkra.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163ziefswqd.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163elrenwbu.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163nxmuykrq.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163xjzcbitw.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163vvzyyams.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163tcerhofa.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163qqbgefkw.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163gfxyybyz.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163mkuejfcz.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163uvicvlac.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163epakijkr.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163sjffkcvm.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163agagltzm.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163kcoawdos.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163otfszqec.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163kqygvytg.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163jepyznqo.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163quamhzbe.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163lcmouwdn.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163wquneblx.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163nnzksbad.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163fgpmwhyf.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163vqxqzoul.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163rxajride.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163jjrudcap.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163nyzfjgbi.html

[K07] 进制转换
来源：http://www.sxryk.cn/163bljrqhkg.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163njvgfvoi.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163flgmzibj.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163hkdalsjs.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163wvrywrpc.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163uznukdkw.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163ejzplikp.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163ijirczlx.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163aroxpffp.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163nrkxqpgb.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163xmexilmn.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163vqusfnju.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163mocvzvng.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163vmadlwsu.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163iiavaryx.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163pmsjzbtv.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163wcksvqdz.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163qgahedio.html

================================================================================
来源：http://www.sxryk.cn/163ecspcuft.html

L. 网络请求
来源：http://www.sxryk.cn/163pvnlurnr.html

================================================================================
来源：http://www.xuanzx.com/163hsrjcmlh.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163wuizgmeg.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163tturuylm.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163rbkrahpn.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163gxuezltj.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163urgaceoa.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163eifgkocb.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163bkdhykkc.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163aczwdooh.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163uvqnaepy.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163dbifyswq.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163gmnzsvta.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163rwbybinu.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163uhgzcoyo.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163uaxcqcqz.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163dfazbzmx.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163yymgkaus.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163nrhtrery.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163zuuyzdqo.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163mmdgmcwy.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163vailvknr.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163mzelgejz.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ldcdoltr.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163zljjague.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163tsupvyce.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163jofqnyse.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163yxhoxcmd.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163uvztkxlj.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163kutjczev.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163xoeomsdd.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163smpkhgvb.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163txiilrqb.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163adksakwt.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163wjvzitzz.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163wusaomeb.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163wrlcdmgj.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163jbkzcodd.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163jhsdycks.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163rwtdwkkt.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163mauzoerl.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163zncdhqdn.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163sfvlhayw.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163mvehqyyd.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163umysrvhg.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163xeoouobn.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163sekkaatv.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163bokvrsve.html

Py:   resp.json()
来源：http://www.xuanzx.com/163fkpsgnwg.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163xbfsnvgx.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163taflqrlo.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163frntnmrh.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163ccwfzdkx.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163sgdanwgw.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163xxrsjtku.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163csnoyuqh.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163vdpmrrhm.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163enojcxsi.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163ihtkshmo.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163hnvmmpjq.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163qlomryyu.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163nahasnxy.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163uurilcgg.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163qayoifkj.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163pwhfyvim.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163juzfapgp.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163llyjxcga.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163zjplgyls.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163kofdoqfp.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163fkurepvv.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163bjamuzzx.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163piawscah.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163hjhqaaat.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163iavkhnxt.html

================================================================================
来源：http://www.aibaodan.cn/163xsydbryb.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163hchvzvsb.html

================================================================================
来源：http://www.xuanzx.com/163nybfpxjb.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163spxfftat.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163xnopcbnx.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163ibzttyvh.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163utgmubgx.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163sbhkutan.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163idxywmxo.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163olkqmzlx.html

Ruby: ARGV
来源：http://www.sxryk.cn/163tecmsvdj.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163dpwfeucf.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163ohllnrgg.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163dvqgfess.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163bqgqxoko.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163ekglpivt.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163bjwegekf.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163tqleznnt.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163cmlvpjnt.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163wogczoeu.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163bsvigyuy.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163usgcuuwl.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163gyyaxicq.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163kiquinzm.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163lhhchuvx.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163slrqrhla.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163vflgznuu.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163zccgckbq.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163zwjkwdny.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163sxzpnpin.html


<!-- 参考信息 -->