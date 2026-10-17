外链999!wailian999！

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163hjmdybpr.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163htbpopwr.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163gcwlxrsh.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163meklfkuq.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163lsejhhdl.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163nzqjxxiq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163kmdobdoa.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163jjtzyapf.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163lgwbrwix.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163gmyjquhc.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163zqqubnhk.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163kugqppgg.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163sflwjghh.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163uhkyovqk.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163rgpjzjan.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163cyzbpibz.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163geeseixp.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163jdhxdjlq.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163azqsagrx.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163rvukswxv.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163ypvituvr.html

TS:   /error/gim
来源：http://www.sxryk.cn/163pdgcqqsg.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163lwpxpilm.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163wupqnnox.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163wxwbobuc.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163ybwsoufn.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163yyemhisn.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163watpgnmj.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163bzparref.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163tlfhrxte.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163etannrfm.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163bevqplqe.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163qdtxfyjd.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163vvhfkpxb.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163bmnbjuyc.html

================================================================================
来源：http://www.xuanzx.com/163whpszqxm.html

J. 日期与时间
来源：http://www.aibaodan.cn/163tzgkcwik.html

================================================================================
来源：http://www.xuanzx.com/163vxrjidyp.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163crcealyb.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163gjxxttmu.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163azormwbe.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163tvzmepas.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163rlbyifwp.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163ggjomjct.html

Go:   time.Now()
来源：http://www.sxryk.cn/163bgatootp.html

Ruby: Time.now
来源：http://www.sxryk.cn/163ppzhpvlk.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163iqhgputh.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163kmlofnqw.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163zdodzbve.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163pzgukpqq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163ingxhvam.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163qaleqabr.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163nmcfopqc.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163beqbhwdf.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ncqfyulf.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163txhjsmze.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163clbxpnpl.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163cupfstpj.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163rhhqvibb.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163vwlmklir.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163admbqwix.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163hpxvthzw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163uvliduar.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163lbbnnmtc.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163tzjlesmt.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163wvicurrl.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163mahvvzja.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163baoapceq.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163ecvkmuzn.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163rfzliqim.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163ahnzwcxf.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163gxrtyfpx.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163cmolcsjc.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163fbfuinjl.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163efjtnbcu.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163vikogijt.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163pzyutacn.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163plohpcws.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163shirlvcc.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163uvmmlqbt.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163dqdundth.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163spnxqaiw.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163gfhqgkde.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163arkbsuex.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163bdauonrn.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163cbmzscqv.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163denuujls.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163pvdyspci.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163kqjazqfq.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163woemjuhv.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163jgkxgwte.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163kcyrdmqe.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163avgncine.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ogpllqtq.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163felclnzo.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163gmyhegzb.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163zqkbxhlo.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163ipjxyxgx.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163lftmvhdc.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163jlcxrrgs.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163cbyszgze.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163uxaguzmy.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163vgaicdrs.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163yiqqzeyp.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163savrrdai.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ltkutogg.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163psavyexf.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163kumkaumr.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163vvqnburh.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163xqbbxlsx.html

[J09] 时区处理
来源：http://www.xuanzx.com/163dhguakkp.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163lfkthfvs.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163jmebrgvg.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163xgbrdmau.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163pxzceujr.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163ovxfgrpr.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163xngyulzb.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163nidikrpw.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163suwielpa.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163yvtfvrfj.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163cpdczjat.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163nmzrbxas.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163wxljisuv.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163hoqjllfi.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163ocgiapdm.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163ndxdrijm.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163gknjgbzr.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163jabjmkvl.html

================================================================================
来源：http://www.sxryk.cn/163szavovyd.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163jyqofuuu.html

================================================================================
来源：http://www.sxryk.cn/163xfeujszv.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163wvjpzjkf.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163qtdvjcnm.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163vpjdzovv.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163swuannlv.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163lyxpvjls.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163maiiabrh.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163rqyhbdis.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163ohwnkofz.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163xcnvamrf.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163wabmrrjh.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163avqwwvhq.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163qegprelm.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163oikpkuzi.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163kuyhcrdt.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163vpjezvco.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163gvojlpak.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163tzcgueyc.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163hmlesibl.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163uffogzmg.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163qoejlfsi.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ywhlgyab.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163lndvlwkt.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ppvwqyto.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163sahqmnsh.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163ekecgnlo.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163sjbpbmfd.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163pometdqw.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163qieabptv.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163kmoylwtf.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163awrpwute.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163frffcqoa.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163cqisbktm.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163bxuqdomu.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163dylvscqr.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163uizgtswt.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163asxjnddj.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163imocckxx.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163vpjuqprq.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163waqzbejw.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ermlljad.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163pyttffeu.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163rhiuevwb.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163ijzkgtzi.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163vkzxzkvv.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163kdokvktk.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163hypscvjg.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163afujushj.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163tlttfeqh.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163hjdxruds.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163klwmchjx.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163buhslvqx.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163gxgrmppp.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163hnbkupkv.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163zeiaujuo.html

[K07] 进制转换
来源：http://www.xuanzx.com/163zarywwcw.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163rfvptqrv.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163jranqfod.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163vylrjdey.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163bojrmhiy.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163vohcqvvf.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163pjralcdu.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163bzpaecxn.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163gogcikwl.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163wrzeclti.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163djneszpz.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163nzmcjguf.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163uegmqzlm.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163dguqjzlb.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163smlszofc.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163mjsklgrl.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163kxommxhx.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163vhorpgnn.html

================================================================================
来源：http://www.sxryk.cn/163pblakjlf.html

L. 网络请求
来源：http://www.aibaodan.cn/163vifowxho.html

================================================================================
来源：http://www.xuanzx.com/163dxgkvhup.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163sezvkyeg.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163jdvpuikh.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163rfrxxxbz.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163miuljdjx.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163owigmxjc.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163mwursovc.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163oscgxzzg.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163sbrmslns.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163hsgiqnmb.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163ccgntvgo.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163htcaomlr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163pdelnllx.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163qbanztza.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163fnkkkzoo.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163ijvcapxh.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163jkcxiqad.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163lvmsshvm.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163vaeppxlh.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163uchylyaj.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163uwuvuagh.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163geqeawor.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163mqxtxhrt.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163mzfyjkwr.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163fmklfigg.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163dxpuecjl.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163mzeqbmoz.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163pmhlvuoo.html

[L04] 设置超时
来源：http://www.xuanzx.com/163hnihyjzc.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163znnqcgek.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163dlcqrmbu.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ksnbigou.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163bnvtlzyj.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163adfpyfrr.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163khzogexe.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163gcmpsjsd.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163cdolehjp.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163rcybtasj.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163jhtygojq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163mldhxggu.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163njpqcpjp.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ssagznbh.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163xdqwduhq.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163xjdbyznc.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163vfhbxshb.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163dxjutetm.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163icnvwwyh.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163wjrglshb.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163bsguqtfg.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163knxiwiax.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163xpiqdmrn.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163srgeryog.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163tmtprefh.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163buzyftfl.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163eqtwatlt.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163cuawsswy.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163mmktcjtm.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163abnwktug.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ienixznf.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163mozjfyzg.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163ppymhrfn.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163evdezuge.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163zjplsmps.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163rjzxarct.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163wzrkdvgr.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163noexlhri.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163rzgbuszd.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163dyomatab.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163yajrzvdf.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163wpkinrhn.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163ljznhtla.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163ibapgrwn.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163gxnzwjvl.html

================================================================================
来源：http://www.aibaodan.cn/163limtgwjj.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163pqpjqxau.html

================================================================================
来源：http://www.xuanzx.com/163jggmwtte.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163bbkcgsco.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163hoiyadzn.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163rglcogsy.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163rmcbgpmy.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163cyszdfzj.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163ygoxtlmx.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163zrcqzlra.html

Ruby: ARGV
来源：http://www.sxryk.cn/163cuxqwbza.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163etbcazoi.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163emymhsjz.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163qizozsfl.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163zanftdya.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163vzbjzhpa.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163mgswtien.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163dpeqvobk.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163mmriklpq.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163cchkfhjy.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163wjgqdgzy.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163cqbtfixy.html


<!-- 参考信息 -->