外链999!wailian999！

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163atexgqzx.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163zirdkbkh.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163cicvlnsh.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163pspnugzw.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163gxyqnqbv.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163woovirjn.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163zvzfpmjc.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163gzsvbifh.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163gkuyuvpy.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163lundwipn.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163roswjvbo.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163akyijluc.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163oixwefrk.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163uxiqosmj.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163fbaeqakw.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163jnqbukmh.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163udodeibl.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163apssuagu.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163zplgsiyl.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163vtwiziug.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163xklnksik.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163sahnxunm.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163ecwtelho.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163rtfxkzwv.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163cfzahzlx.html

TS:   /error/gim
来源：http://www.sxryk.cn/163kwczhpkg.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163gcmxllql.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163rbposhhy.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163pyoizrov.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163crmjysno.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163zxnvvfcg.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163crynhgok.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163gcaqtboc.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163hdiubeae.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163pilutxlr.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163zzgoktmz.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163ccazkuqg.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163betewcub.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163uthrdztk.html

================================================================================
来源：http://www.sxryk.cn/163paanpztn.html

J. 日期与时间
来源：http://www.sxryk.cn/163txltzmru.html

================================================================================
来源：http://www.xuanzx.com/163ngeaoibf.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163wvcjaskr.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163zmyddiha.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163qahzktsw.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163grxvvibu.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163kwavzkos.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163smfcrtww.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163fyevhppb.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163ksvqzwyr.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163qboihmqs.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163anxrvrqb.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163inisjcst.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163eeazepxc.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163hjinsqoz.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163fqacdzdn.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163vkcydrmq.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163dtcfanjw.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ygdxnbjn.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163qzidyvso.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163btvcmuhu.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163qglgvtqj.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163woongsul.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163jxokvnfn.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163khdmhkfp.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163djtfjdfe.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163zbscrkje.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163fpjwxohd.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163mfdxvxhf.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163dnprpwee.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163pjykoxin.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163bnlupvda.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163whxlpdoq.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163zjgkgmhh.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163npbpvkzv.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163mrvmsqec.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163xuwmiita.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163jxftozaj.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163jtuhxcjc.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163glwrgiaf.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163albfqgfb.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163orrkxouy.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163wqwnhneb.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163lbzrzznb.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163lkmrhvdh.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163eslqhtqg.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163zdxawwui.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ogmuybed.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163cxrirxaw.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163vwphvcyl.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163ejpibxqo.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163orxncgam.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163vvorkhwp.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163reylvlvz.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163czskwrnl.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163ltcyzkrq.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163eplaasad.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163jjeedczr.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163nilguhyq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ojhbgpps.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ujehegcc.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163fhmorbxj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163vgelorkk.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163unrelczc.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163lnkaxynr.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163rocarxiz.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163xivedbyx.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163goalcajp.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163leuumhgp.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ydtrvkbc.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163zwdszhkg.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163fngtznmu.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163ccbojnvo.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163hkwtqlaq.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163xnipomtg.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163dmmuvdou.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163bblwxzbp.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163bvsrlbxv.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163qcywewug.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163poiqisvy.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163zheneolx.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163yflbtpfj.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163zncevlmi.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163nakylgrv.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163dulktgvm.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163zqetcook.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163aajyyanw.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163cokyxpdd.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163bnfnveka.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163yjqmdllo.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163mvhashtw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163qolgcmvs.html

================================================================================
来源：http://www.sxryk.cn/163wjbwfbhf.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163qgrugfjb.html

================================================================================
来源：http://www.sxryk.cn/163ivbhbvjq.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163pjvpqcoz.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163hzcbxvvk.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163hhtsoiiu.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163njntosta.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163keiscwou.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163tksuzjag.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163dprpzaml.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163ipkerayl.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163csdlqbyn.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163djdulxiv.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163kkzbxvhn.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163rqtstaxl.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163rpzcnpni.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163gsmrhvkb.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163wxmzvlqf.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163qqejlebx.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163yrrguuzc.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163ifvjnfhz.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163ylbvzpjz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163nmtfdkzx.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163temqqfhg.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163wagrrjig.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163qxhabmga.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163vnqypfng.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163jmhdopth.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163aqmnwqwq.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163wfzzajet.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163grapkobf.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163ftjpnvlf.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163udqjbelf.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163adhjbmxc.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163kbvtjndv.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163umrrvomn.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163vpvgxmvc.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163avnnlhhf.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163lreordsy.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163rjuovhtu.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163suohajdt.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163yjnegznr.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163pcojutrz.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163skrfhsdx.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163ovhezpow.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163rxsumfqm.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163nbwzegef.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163opccngcz.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163pqijegtr.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163bsjfumgi.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163jfpestmt.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163tjiuogku.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ljgqkedu.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163gdhygxph.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163huelnzdd.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163nubnulod.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163iucborym.html

[K07] 进制转换
来源：http://www.xuanzx.com/163qtlcpowi.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163wymumkxo.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163lbxwrahz.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163dzipboug.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163wbicndat.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163azrrkdvc.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163mxilivkl.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163ygbkykkd.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163yivkrjyf.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163alauorwx.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163tnfuanck.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163kdtcdxss.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163oukvflmh.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ajwajulx.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163ysyudwqn.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163eqkwtamr.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163vupwivvj.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163nsgzaldc.html

================================================================================
来源：http://www.sxryk.cn/163ocxajtxt.html

L. 网络请求
来源：http://www.xuanzx.com/163ngnjhlxv.html

================================================================================
来源：http://www.aibaodan.cn/163lqdfswcd.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163jlaencvi.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163fwfejexv.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163qxwziunx.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163kubultyc.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163uwptubtd.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163hixrfaqc.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163cdvdsuuy.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163llrctnay.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163fswvijtr.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163iwetwuas.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163pvvjfjpl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163xpzxrlez.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163twfphlct.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163uboqkzvy.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163ynbzxvge.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163lprxewbt.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163zrzhsbeh.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163rcqthqun.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163gpwazais.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163ctvbrlac.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163xilqsduk.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163nwbzsare.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163nkxeeicq.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163zroagjtd.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163yiqruhev.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163pmcxrlgb.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163ygcubkrd.html

[L04] 设置超时
来源：http://www.sxryk.cn/163tyhjvezf.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163sewmvqoi.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163jgutcptv.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163nbuajubr.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163rylovfeu.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163fhlzggjv.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163fzfvxfhw.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163rpwfcwgx.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163bufihlhe.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163aaoiykbd.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163kogfrwsw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163wlxlzrsg.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163mjipvkbg.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163unqlzbvt.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163lwsnldcv.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163gnuhpyxf.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163awlwmhxp.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163zmelbnik.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163zwxqgdlm.html

Py:   resp.json()
来源：http://www.sxryk.cn/163lvqozbyc.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163dahouqhy.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163uwjvhzen.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163xbchdhth.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163nrqlkdvh.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163gnbdnrpe.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163kvcahwjw.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163qwmwqtys.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163rkkokkcm.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163hxwhtias.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163bklqflpq.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163fhuxaumn.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163idcgvcsm.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163rekatjnb.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163hukzdeqr.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163wablioke.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163dlrzrdxc.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163ukscghlo.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163thikkpaa.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163ywunggam.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163kdgakcte.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163rapcornr.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163puqutlkb.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163ahyjlifc.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163fevphcjn.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163yshqajwj.html

================================================================================
来源：http://www.aibaodan.cn/163bppxeaxq.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163cfydprxx.html

================================================================================
来源：http://www.aibaodan.cn/163tncsedxh.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163xevpqntb.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163xrblxwum.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163wisejspj.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163qtzhfekh.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163bxzsquic.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163xpchfsqv.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163iyuntyjy.html

Ruby: ARGV
来源：http://www.xuanzx.com/163hinvazqf.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163sptgsctk.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163yczxczru.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163wdmhaxjd.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163sgkiyoyt.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163ydqoxgjv.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163mxygapiu.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163pbncrwqp.html


<!-- 参考信息 -->