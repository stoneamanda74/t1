外链999!wailian999！

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163sthffzui.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163pfznphys.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163aybjrzht.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163eqkzrsfw.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163qbzpcurq.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163ecgyvarl.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163vqydfabt.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163vbnwpwgw.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163ctoenpny.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163hucdgchu.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163phrgkfgb.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163pfyvwvma.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163yhvkwnae.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163qnfdntnt.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163lommajdv.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163zwmnkxlo.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163pifbvydp.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163phoxicyr.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163yffxuvaw.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163oldejrld.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163neqpjxid.html

TS:   /error/gim
来源：http://www.xuanzx.com/163jdbrmowb.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163ewdfxnjn.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163tzuujolr.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163xindfksk.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163fylecqbi.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163jfnepqoh.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163ejoecrfg.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163wcvlelvs.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163tliuzqsc.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163xtzwgxvq.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163riilvuur.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163knhcuwvl.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163ycaalblf.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163fbmbqjqh.html

================================================================================
来源：http://www.aibaodan.cn/163dxpmcjhj.html

J. 日期与时间
来源：http://www.aibaodan.cn/163drcxonsg.html

================================================================================
来源：http://www.sxryk.cn/163dksmuger.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163wvtoxqcd.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163glsowemf.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163cvssxnib.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163lpivtdzy.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163oyosmruv.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163kmufuayg.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163kajxkmrf.html

Ruby: Time.now
来源：http://www.sxryk.cn/163ekjakczl.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163lvcawjuq.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163omgrrbah.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163frevtahr.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ngwcoftm.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163znijpesm.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163ttxeuipo.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163mmmkxnpi.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163wivjwudf.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163sxirlgug.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163rbkhjhul.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163igsliede.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163cjulrikd.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163olqydlxl.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163fzmanrdf.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163aiuvxryv.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163yaipzqrp.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163wjodimep.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163pwwaxhck.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163zqicebnb.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163yqgfhitf.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163thyoovkh.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163yjhkrtjh.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163polcixxn.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163kubjcsat.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163wlvskrjv.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163mosvcmom.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163tzydimuz.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163iprjrmdy.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163bkslvhub.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163rjpgvivu.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163twarrawx.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163sqddnmfh.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163saovdjki.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163ysfjyzgu.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163chynjskg.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163dafuuueu.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163fldhhczb.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163ysfztfwf.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163aqpcbcau.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163lstithqf.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163bobikjnc.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163nurbcrzn.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163jkcauuyc.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163jnmxdifq.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163yrqcaabw.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163ivjgttzh.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163qferwmvh.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ocvvnwbr.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163qttkbfdd.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163qkahkjuw.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163wigbdbij.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163twhbqhfi.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163npnzkqwg.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163eynnpycg.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163klrqkdpc.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163enzxsgci.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163hmdwngup.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163mdjlhkul.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163lioyodfg.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163ioxsknzv.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163bbcgruqf.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163cqdhnqzt.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163hblhmspo.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163tlfebzxr.html

[J09] 时区处理
来源：http://www.sxryk.cn/163nydhqfhe.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163oguewipi.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163cmqmmgzn.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163jqdhxznp.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ptqdscms.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163gsgluyit.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163spnvjqop.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163jvstultn.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163plsljiez.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163zukuzjkd.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163wnpqpnxs.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163nuozibxx.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163aasvdogw.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163biqtcvdv.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163lohwxmwl.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163vpbgbpet.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163txqvlkqk.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163bencgrqz.html

================================================================================
来源：http://www.sxryk.cn/163xvcrfuve.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163qutshlwn.html

================================================================================
来源：http://www.xuanzx.com/163qxnvcyjr.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163vrgsepua.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163fbvxlkat.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163mttwmvcv.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163sggiorbz.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163quyefugd.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163lqlteyea.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163nzrnncli.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163aluzvjdx.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163sndixnev.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163vaauhfkx.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ehkyczvp.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163uxagxmvb.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163kqfmbdpo.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163beaijdjd.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163fqteyowd.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163mkcfdtch.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163uyvnnzxm.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163aaeqnzhc.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163hyeaesqn.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163jwaeoqwr.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163qusrnguj.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163dtvnddbo.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163zercroqv.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163huzlpnzy.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163voftjvbp.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163znafdhwd.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163bhplvfav.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163tdmpzuwc.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163swghzret.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163itfbinvm.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163cssefean.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163dikgriwx.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163jyghvgvb.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ozrynrke.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163vrunzala.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163jvufmgak.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163snsfwhwj.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163hdvhhmzt.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163vgsejyxz.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ynkccuqg.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ldfaujxs.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163qescoebn.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163xcyhgjgm.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163pguqitpg.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163wcazosoi.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163qdtuegsh.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163pvnptxzx.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163rpiwrdjx.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163nqxkwfif.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163rwfnjuev.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163fnzpwmcj.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163saguvaxt.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163tgqeuhwx.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163hvvedyoy.html

[K07] 进制转换
来源：http://www.sxryk.cn/163ojxrkwoq.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163qbuckdbn.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163lzdxykiy.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163morxzxda.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163simrephh.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xsjelyqp.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163htuvjuov.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163cgqlkkip.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163dqyitarm.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163hllywwxa.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163wznuntnx.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163quevsqpr.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163zyjlkexw.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163hgcngoee.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163bwelomzv.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163wxtcrfyf.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163mlnoxwef.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163dkbicchy.html

================================================================================
来源：http://www.sxryk.cn/163dxoiihob.html

L. 网络请求
来源：http://www.aibaodan.cn/163rfqoqwuj.html

================================================================================
来源：http://www.sxryk.cn/163borapilz.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163cjijwqmd.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163lksimljp.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163qggtjyuw.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163ljjlebhr.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163pfvkveoe.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163nuhsdldk.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163ggkzihhh.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163fawtgvmx.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163zkikgzfk.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163xabojgjk.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163jqbcovre.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163fkjhooly.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163hmnlvsip.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163mysvejaj.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163qygsbzsn.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163htreijak.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163rvvdrkhq.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163oteesnlb.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163umhybkxx.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163ubkyfszi.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163qfqquyfv.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163mmfandde.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163wuwpbrzb.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163kloivzcl.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163ijqmkeyc.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163siqfiejp.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163vzddqcbq.html

[L04] 设置超时
来源：http://www.sxryk.cn/163xxywptgo.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163cqmzjrcp.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163roevdpmm.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163sgkdiszc.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163kymuwotf.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163abnzxerz.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163kludqpjc.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163bwjtwqif.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163gqutjxuy.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163xnugxsap.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163frqoinaq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163bjzlbqts.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163xtcingcv.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ddfmrkuo.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163spqnrqsc.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163pkftzdgs.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163aknqhdvf.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163gxjpfcdh.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163tvbovzri.html

Py:   resp.json()
来源：http://www.xuanzx.com/163ofvjndpr.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163soybjpsx.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163eiiuicsw.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163lpdmdwvc.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163vbgphnjp.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163didybpqm.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163olsavowq.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163tssimfjf.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163gzxdjxae.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163grfhfwyq.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163rtsscoso.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163jgcwhomi.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163udtpzajm.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163myhefsxi.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163whahdxyv.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163lvcskedj.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163egpnhrey.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163akzxzdqd.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163xlpcjyhu.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163nqqnwdmy.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163zwjpgurh.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163rudfiopa.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163svzunvbd.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163jxmcgceq.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163huuoapgq.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163wenifnqa.html

================================================================================
来源：http://www.aibaodan.cn/163dihmmgin.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163iiimcytk.html

================================================================================
来源：http://www.xuanzx.com/163pxoywglj.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163rfjuwfpo.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163zgbajied.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163vxlogoci.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163axlehqfk.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163axabpujh.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163bozdcsqt.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163pomkdhsc.html

Ruby: ARGV
来源：http://www.xuanzx.com/163pjidtdbh.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163ccvzrjvd.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163gsilttrx.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163ogrkpbzw.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163vlvnrxnh.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163pymfupvc.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163ehbsphwl.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163hmnclkfm.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163cmfcxdfw.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163lhnumapz.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163wggdliva.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163yjedhshq.html


<!-- 参考信息 -->