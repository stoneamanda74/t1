外链999!wailian999！

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163wtixowao.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163uivtftfl.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163tclndvpr.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163twowsfjw.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163qkxkcjuz.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163iekbunyp.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163fkseeyhk.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163itwppoco.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163jmvxfyob.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163plfluskp.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163kuesntbs.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163uxzwcevs.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163cdzoviez.html

TS:   /error/gim
来源：http://www.sxryk.cn/163pufjklyo.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163vtamnrsw.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163lcpsgusa.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163qfrxaxww.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163lrgofbku.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163ulgpyvyj.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163juknndqo.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163wgwxzdev.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163vlvmnjmc.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163hokasunu.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163qpufzohb.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163ebmpgmkm.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163vzvrdfak.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163kekhisvl.html

================================================================================
来源：http://www.sxryk.cn/163evzeefle.html

J. 日期与时间
来源：http://www.sxryk.cn/163zzkidmke.html

================================================================================
来源：http://www.xuanzx.com/163pggxqnba.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163bvtrymme.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163acjivzed.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163oxzawoxl.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163oahpcybm.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163jmhxnexc.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163axjnnucx.html

Go:   time.Now()
来源：http://www.sxryk.cn/163idwylzns.html

Ruby: Time.now
来源：http://www.sxryk.cn/163svjgcdba.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163hhlsmyyd.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163upafqggp.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163swawkqrf.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ctrqxyfb.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163wtamfdmr.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163pkwgazzb.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163eghtuoex.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163sftgbwou.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163zfkbrjtd.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163uvfiqaoq.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163yqtxpneu.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163rrpylyvp.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163mqqtohvs.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163dgjwonjh.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163osprsssk.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163leqetpqe.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163flvwgmdr.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163yhdefrub.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163jqdcdbex.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163danhxqlx.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163zaxjznwl.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163easxwadm.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163dhlawmvl.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163rfmmnlsd.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163grtxxenc.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163esoaseqf.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163pvqsjmid.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163bnjmodak.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163txocmlbs.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163fnusrluj.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163mrudyqjh.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163fowccisc.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163xrrvvqbp.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163nnabuste.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163yopyfxhd.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163pgheytpo.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163tclfjeul.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163jwcbbxdg.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163rzwcssbk.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163lqesxair.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163dhzifgwn.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163fcfvbqqg.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163vkidisnp.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163qajhgmti.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163cwpirliy.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163gidyltyn.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163xutaigez.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163dttcksch.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163npapaoiz.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163mjnfijmr.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163zqfozzxu.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163greibekb.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163nvkvheuy.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163vskimpcu.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163dllmavnw.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163fgmvdjzs.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163eifoxjje.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163vnfahzhv.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163ncynqfqp.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163edfetyyu.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163lxrfknyd.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163xilpfewe.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163gxmpmcnb.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163pbrerxlm.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163yuyxsxgl.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163mlfdawuk.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163zleewahl.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163zfsnhlma.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163trrphxzb.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163kzgtremd.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163jxfllhoy.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163znpukfco.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163bficomqp.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163wdjkfyos.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163ukphfhgp.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163mxjwgfec.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163slvgjbmv.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163qzuwliqq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163onjeupra.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163pccxavfx.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163ivbjfclj.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163vnfoqnyi.html

================================================================================
来源：http://www.sxryk.cn/163yisrrxbe.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163lkzgdcwh.html

================================================================================
来源：http://www.xuanzx.com/163nkupechp.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163nvgmksjq.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163facibzmm.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163iezabqdg.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163gfnauqbd.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163nstgqczm.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163jtruayuj.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163gfbvechh.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163crpknxeg.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163qlfivwgm.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163ohatnukp.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163rbjeokek.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163tnxikils.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163wrfojleq.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163lcgjarxd.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163mayullhl.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163hidacdfq.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163kgaumtcx.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163qkpinenc.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163mtxbelcl.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163ffcncqrs.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163dgqiyhjo.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163wftmyojh.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163mnbjyqzk.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163gkrgblpj.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163xyjrqmdl.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163stqwvudj.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163kzqyoccc.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163ekopehda.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163msothrku.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163pkwjtepy.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163pqvsscye.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163hvwkzzfz.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163hoyagehn.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163bkuotmls.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163jpjhzxya.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163rzfaxszm.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163olfrueie.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163cfvwuhrr.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163vubtzmsn.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163vuuoijhd.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163octjiycy.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163jopritpi.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163qfngngvt.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163yzqugkka.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163ylasinoy.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163acdarini.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163wxbqrauu.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163ovvpdrev.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163cuwpakji.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163cchpzlck.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163qnrqonxz.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163zjlhuwzd.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163avzmqdsf.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163umenmhof.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163zutvntza.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163ouhiqujh.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163mgesfxlq.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163inecmpiv.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163yijojcuk.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163xopxymjj.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163sbofotbn.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163utmhphre.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163dhabuejz.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163yxibjtzr.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163dtbcmbfr.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163cwndjrzx.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163hcalxqsw.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163jnlrhmwv.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163rhkztfar.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163wfkvyqjt.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163krxofcmb.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163bfdvqohr.html

================================================================================
来源：http://www.xuanzx.com/163sfagnlsn.html

L. 网络请求
来源：http://www.xuanzx.com/163bublnodg.html

================================================================================
来源：http://www.sxryk.cn/163xifeofui.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163qgujwhmz.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163yvedmgji.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163tzcwpblb.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163jvepajgu.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163ixbzpehl.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163hmmbvmpj.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163ofpyndwf.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ubdssrjo.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163lvnjcpct.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163znfectqo.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163iiuhnqhd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163hksuubfg.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163mnbzlkla.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163wwsofybk.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163kqwkxdxc.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163raiuuhrq.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163sxzxhain.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163ynjlgigf.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163wjzxihsg.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163omlmdgmd.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163hzuxeszv.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163lolzfuus.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163fnicfwme.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163oaaeuakd.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163jeimwips.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163ggqembwi.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163rfhqjpbg.html

[L04] 设置超时
来源：http://www.sxryk.cn/163oqvltphn.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163qvkwbaow.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163eyvlaxar.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163tnxnnneu.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163kremldcw.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163ynuhreyf.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163dlnszgzg.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163zerqeyxw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163pymjgxtn.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163kspumank.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163wssdibdy.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163tzxiddmv.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163kxjbifky.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163mrjwqjhs.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163inkcwqcs.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163rrswdbqr.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163trqxqhmj.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163kanjyvuo.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163xpzecirz.html

Py:   resp.json()
来源：http://www.xuanzx.com/163zxjjwcnm.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163zmdrgfhf.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163lkkpskgm.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163dlopuwbi.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163psyawjnx.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163nvgbcclm.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163rteobgni.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163nwpmcslf.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163akddvgbn.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163ylmbikyp.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163hjnsplmj.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163pecviuhv.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163bqddqxlu.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163yompfqty.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163sfkdygzr.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163ucrbbwwb.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163uwmyndzs.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163oneavsec.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163uyybyoui.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163zglagsyj.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163pgsfcfak.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163alahylvj.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163poeqzfob.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163lkdlisix.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163swvqgddm.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163uareasvu.html

================================================================================
来源：http://www.sxryk.cn/163vomnttaa.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163tyokcdmd.html

================================================================================
来源：http://www.aibaodan.cn/163siggprcx.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163ztrsggmj.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163ybgennor.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163thkezhfh.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163gtycoibe.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163rvvrdoin.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163auzfeyvk.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163pgpheyba.html

Ruby: ARGV
来源：http://www.sxryk.cn/163tgiosnln.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163lubtmowi.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163vbhawtfq.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163jidjmrft.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163xkqwikzz.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163gupopyxl.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163nunpxprt.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163fsxqohft.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163ctsvwyom.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163suxddmlg.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163tqhegkvr.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163rmoobgrq.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163vsgzrzkh.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163sheenjdd.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163zgnsmgdg.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163qwbyefyy.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163jwuxclto.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163zzahtopm.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163ushtupta.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163tggieeqk.html


<!-- 参考信息 -->