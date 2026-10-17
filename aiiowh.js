外链999!wailian999！

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163xjafaeum.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163uwghhunq.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163cppdngih.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163vkripfho.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163hghvutui.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163teqotffg.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163rgrfmfmk.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163wpfpdgys.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163xzaxggzo.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163emtfkrhl.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163vwxiamxf.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ozhwpsnh.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163jlobmykk.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163iigglkaa.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163lepqtqax.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163fczadzow.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163fgzcdemd.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163tohjmygx.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163osvyctee.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163bomlxaeb.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163qajgoxlo.html

TS:   /error/gim
来源：http://www.sxryk.cn/163efsfdehh.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163bkooevnw.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163uaifgtvw.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163mopoipgf.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163irqyvzxb.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163pjwcytlv.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163cmhdsopp.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163xsrwxdfj.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163hdccqpvh.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163pbprrdfa.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163mcgslrnn.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163ltamrggt.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163jaqztvwk.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163fmulftvc.html

================================================================================
来源：http://www.aibaodan.cn/163fnhaoarn.html

J. 日期与时间
来源：http://www.aibaodan.cn/163yhwefwnp.html

================================================================================
来源：http://www.sxryk.cn/163khtndbep.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163nkxnlhlt.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163eyblkrcu.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163zkafcikp.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163qorxrxyx.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163tzavrovh.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163jlrrqdlj.html

Go:   time.Now()
来源：http://www.sxryk.cn/163wwderthr.html

Ruby: Time.now
来源：http://www.sxryk.cn/163hwlveyju.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163odkrmnch.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163innpxhuk.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163fzhlsofs.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ptlgtjkq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163xbmrkoyp.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163jiwqmogv.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163ismzrzrh.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163viykzjii.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163mbjlgwwj.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163epaqcedm.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163nysuzpki.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163bxlubqie.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163drbdvhbs.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163bcemmird.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163bdbkqvaj.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163sbgyfwbw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163cqrzpqjz.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163grkuocad.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163jtiwyoxo.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163vndnandz.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163ndggfbab.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163ercnxcqv.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163pxjkfagz.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163uypqiyma.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163tmlwdpwa.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163wpimkxvq.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163fsadjobu.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163xrcqsomk.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163lfzrbhcm.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163rmqozhuc.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163eehvueyj.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163khstsgjy.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163wuoeotnb.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163fsqzlmrk.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163dwnczhku.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163vtptbjvl.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163echkkipa.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163iutokmlz.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163ikivixnw.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163pwptmfhf.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163ecjnribp.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163wfhgjkya.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163jtcmglbr.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163bvzuqgzp.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163purzgnxs.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163nkaomgtb.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163rqiadhlv.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163uvxroqjl.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163owmdaoco.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163utyvxesb.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163xdetewbl.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163djxrvhdm.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163jqltzhsd.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163lfouvxcb.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163szeyswkv.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163acgmtrev.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163efjkpkgl.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163wnhmhnny.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163wvplhjut.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163gymsxjvt.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163nceeuwhw.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163xhsvstnf.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163prfuqdva.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163hzqdathf.html

[J09] 时区处理
来源：http://www.sxryk.cn/163gcjghsub.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163yuwcbpik.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163jagnfixx.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ulkvqtul.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163pxjjfgst.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163yqsoulhk.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163spzacfsy.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163aeupntvt.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163spsymqzt.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163mpdrinzy.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163wiequkis.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163vudlndyn.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163kiardbuy.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163ddctrcpc.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163yoibqtod.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163vcukyxkr.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163phwcrvvw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163feppyjmg.html

================================================================================
来源：http://www.sxryk.cn/163ntcypmpb.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163jzuzbadq.html

================================================================================
来源：http://www.aibaodan.cn/163lxoqqsyy.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163lvxvptqg.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163vlcwjkob.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163kttrvgeu.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163fixzvcbz.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163fyrugrfy.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163wikfipee.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163mbqnopcd.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163wcnwreto.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163jeazxhxz.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163dkgzspof.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163cqxdvgix.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163qrepcnfc.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163vvzlvsek.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163vyhssrrf.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163vgwzytes.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163xlestyjh.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163goscnimc.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163yvlillto.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163daafxlgk.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163ghmhddad.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163iybqdrkn.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163cotzwmxq.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163hhdlduei.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163htiatyjn.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163kcwauebt.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163hnnxgykg.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163quyscvhq.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163qxolckwg.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163myspxyou.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163wqqrunid.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163bzpddnuv.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ttfvsvpu.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163ordepuug.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163uhyvctws.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163lzbankgt.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163vtjxniee.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163nvgovtfe.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163oqyzyeah.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163lpqqmqcj.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163qlfkcijl.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163tokaetot.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163yfmxhngr.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163rvxjhavs.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163juweokln.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163cblsvunp.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163tjszqvtd.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163wkqfsjnj.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163empsljlz.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163cydkfaet.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163spgehhqb.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163axvnyodx.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163enfwiuqx.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163qltkenhd.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163akrtwukd.html

[K07] 进制转换
来源：http://www.xuanzx.com/163eiwmkolt.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163wqfafgyc.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163wojxlpiu.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163osulglsv.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163pweukspc.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163dslqipyl.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163rbiscqoc.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163ucetjfkp.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163bdcqprqw.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163aayobmwx.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163veroihdx.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163ukvwloto.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163pivfvzpb.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163nbjnaqcc.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163chyunsyq.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163tvnkdjbe.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163srmibfmo.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163syqtwejf.html

================================================================================
来源：http://www.xuanzx.com/163krntcysm.html

L. 网络请求
来源：http://www.aibaodan.cn/163guqwmvcp.html

================================================================================
来源：http://www.aibaodan.cn/163wjcnyumc.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163xjpjbpiq.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163gcerkdjk.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163cekezzve.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163etasfcmq.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163iqaaujed.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163ljvkpztj.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163axbejzqp.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163fdgmxawo.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163swfzgvse.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163gibhwlpc.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163luwcnvog.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163ztivmxgi.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ahzqtkpt.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163dexipvlf.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163lvvecgmp.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163jkeubaol.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163ecfuxnhm.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163zdtnkdzu.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163mnhafdtu.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163mghxatds.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163gyjlfrha.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163nvnamckz.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163szarwjwj.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163ttmyjzig.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163hbvzqczq.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163cjxwjhag.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163vzlupggx.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163kozlltcm.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163fzvazmck.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163szgltbko.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163useybbsa.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163nkzvpfrv.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163kkvoinlv.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163tnvwuyss.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163nfvopcam.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163exhoaxfk.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163xoijrdxg.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163bwtmhvls.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163mmieowzf.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163erqhjzkc.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163uivdzmqb.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163puvsszcv.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163jhpijlbv.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163wfkkocye.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163ugsxmqhp.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163raonkaet.html

Py:   resp.json()
来源：http://www.xuanzx.com/163jnbbrjgu.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163suoegtjm.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163tamcxaap.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163apbiuypr.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163oaxfhmtj.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163ucgzyori.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163wphfoelu.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163hlbambhi.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163udmmwxcl.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163pvjpntwl.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163aepvierx.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163hambudeu.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163vsmgzapb.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163mltixnxt.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163rmkeksqd.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163tuwfqwty.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163pndkslda.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163edknrahj.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163grrtadhg.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163xmurbvfm.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163dixrqyyc.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163uftomddf.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163nsmadyzy.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163cbmkxzpi.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163arncqraw.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163sqfryrbz.html

================================================================================
来源：http://www.xuanzx.com/163xepgwxsj.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163cywbkzwh.html

================================================================================
来源：http://www.sxryk.cn/163jqranlbi.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163nlzpahbt.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163xcnajkab.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163aibgqphw.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ggaldmci.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163qmhcevlf.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163swbfqapp.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163giztbsit.html

Ruby: ARGV
来源：http://www.xuanzx.com/163lhoawejl.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163onqhrgqz.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163lizleydu.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163zxnzcbgx.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163szqumfhm.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163tnumwypq.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163spqctgig.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163dfhrjgit.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163nzyjxily.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163hqjzxrpg.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163pknditvn.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163ygppmldm.html


<!-- 参考信息 -->