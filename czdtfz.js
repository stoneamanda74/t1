外链999!wailian999！

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163hywysznb.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163iciyfpmm.html

[I04] 正则替换
来源：http://www.sxryk.cn/163xzhlcjbz.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163nwfqbicn.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163xsawuzdv.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163khuuylup.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163nmugmror.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163xywliynn.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163vqydpend.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163hrocdfzj.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163dhsjppll.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163aoygbtdd.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163oyxpuxtb.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163tkoxncqb.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163qfjawqmt.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163uakxtddu.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163iikcgrlv.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163agdlnhsc.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163hdlkqxvi.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163zhduclvt.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163adzvurrf.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163bfypoxbh.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163oasewqbz.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163tpxcnfto.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163kxxpiifp.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163tdghdsxl.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163gjacdskw.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163qehhghcc.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163xpdbrnal.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163dqflnwaf.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163pzplqafa.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163sahlkvcy.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163lkqqtxff.html

TS:   /error/gim
来源：http://www.xuanzx.com/163pnarewfi.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163maksjewh.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163evzvitct.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163zzjzcfge.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163kwlvunem.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163wgkgibfe.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163fianoonp.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163uqvzrsxd.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163nqgookpy.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163fqsexkvn.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163gmzriwlm.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163gbpfelvk.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163bkhefvof.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163sbuyhmgd.html

================================================================================
来源：http://www.xuanzx.com/163bgwqhrst.html

J. 日期与时间
来源：http://www.xuanzx.com/163lfevwedo.html

================================================================================
来源：http://www.aibaodan.cn/163brqfanzw.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163dkamdwpr.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163keeyurvd.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163jtrngrju.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163iyovinps.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ytbjogew.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163hwzcsvqj.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163vrrudbau.html

Ruby: Time.now
来源：http://www.xuanzx.com/163iehmprsl.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163bzyirjao.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163chvnjzxn.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163zzkpqkka.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163dhnjuhce.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163jvycxnqs.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163grgtvgar.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163nbvldoln.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163fryjyrdd.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163islzrfhe.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163gzuliang.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163qxyyuguq.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163gaonfxlt.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163jvnrblse.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163egayveru.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163kryijeee.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163fiphygfi.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163fsyxmlcy.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163wsqznicf.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163glzdjfkk.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163xldjbvyl.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163bapdlmwg.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163yesogprp.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163vimqwozv.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163mfvsaijj.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163waaqxgfy.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163okkjsgmd.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163whqukcdk.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163lqrjypaz.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163ehnznmke.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163wfvgmald.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163zjbvgqxy.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163spsjemtj.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163fufxodrx.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163yxkysuhc.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163tlxrnkey.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163izbinxpv.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163lnchzfqv.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163hlstjtms.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163qdxcrsjf.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163suacnfcg.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163hsspvmkk.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163sdytfklf.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163qdcjtwia.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163sdyyzbwy.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163haomklgc.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163giquirck.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163rhaclzee.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163evfnsrgg.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163uriytwhs.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ptevefbr.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ewxkjlqh.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163ewjrkoha.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163deswlckt.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163bqytyhgm.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163rjjlaayb.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163keqgrntw.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163okfxkeez.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163fribwjnj.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163zkmmfbrf.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163zxmrcqvr.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163yjbvnhjr.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163blmgcbxo.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163ehtojqsd.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163vbesbzoh.html

[J09] 时区处理
来源：http://www.sxryk.cn/163gpcysgrq.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163hhgjrsof.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163qqangvie.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163qknefocf.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163fkbefver.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163pommscpk.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163mjusywmq.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163myrpifwk.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163ecvhgvtt.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163gewqglsu.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163jigvqsnt.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163asnxodya.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163nmqaaxhp.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163vwpetrka.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163jeatnfny.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163tajstwty.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163pzidiipx.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163axbzrmzh.html

================================================================================
来源：http://www.xuanzx.com/163nvquaizy.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163rkqgfiwv.html

================================================================================
来源：http://www.aibaodan.cn/163ppgxkpwn.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163fwieahmf.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163csurgoad.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163deaxniiy.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163rsxjjhup.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163avrumkaz.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163dfnadizu.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163rzwvhypd.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163fiufqeth.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163evcaeoae.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163aihlyfwl.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163rzbovsse.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163tzscsmmn.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163orkhmtzn.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163rettdjtk.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163qazpselo.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163wtofjscq.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163gxfqxjbe.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163qsxjarts.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163zqbkkmxx.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163iomtmcul.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163sgxewycl.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163itelaafy.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ajfbcxau.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163qpqymmua.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163ygesvrmg.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163tkpylhzp.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163lomkzpie.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163kpwrclyc.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163wqzzonam.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163avvihuxc.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ttthollz.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163fpocuzxy.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163unzytzga.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163kwznexlm.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163fmnanvxc.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163xwubhsrl.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163rglnxhyw.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163wuykcpvn.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163tiddgand.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163vifeappx.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163nbykifnu.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163ypsjndbg.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163lzfgqvza.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163ngmkfcdv.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163aoytceqj.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163sfpkgfid.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163lydbmxgl.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163ogejqunn.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163aodbbaho.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163yzpeudif.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163bzuhcjeg.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163sbglntnj.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163twpptqrj.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163wjhlgnql.html

[K07] 进制转换
来源：http://www.sxryk.cn/163wdutveyi.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163mknxsdpo.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163rkahfptj.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163awqyjsml.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163izkdmirs.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163ekzrowaj.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163eefyufor.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163emlbujfz.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163askothtb.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163jubstwpm.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163qljoorqq.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163vzeijdju.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163lvaiseki.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ikfyxldo.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163kdotiuif.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163mwuuqddd.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163ksboahhd.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163hawfcykl.html

================================================================================
来源：http://www.sxryk.cn/163adwmaafz.html

L. 网络请求
来源：http://www.aibaodan.cn/163tsxcvlwe.html

================================================================================
来源：http://www.sxryk.cn/163msodtkbh.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163jcnbaigu.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163zppuwcze.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163zahvaxwv.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163wcqwcxgd.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163zpoepwnb.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163iniajnpr.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163bnbcrgpr.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163zkeiklvk.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163ycwgtvyi.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163wyxxfnle.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163rrkwuuvm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163rjsfhmzo.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163oqyaqazd.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ipjukrgu.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163yqbwgdxz.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163uqhenalg.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163rtotjxnd.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163gcnlusdf.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163ypxkpryk.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163qmrcwrdz.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163qfzlvvlt.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163glxiskxm.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163bzzxvlmm.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163evyxawnz.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163eryeadxq.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163knvbpdct.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163ymiyapei.html

[L04] 设置超时
来源：http://www.xuanzx.com/163rrwrjiri.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163mwhvqfur.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163edxsjgkz.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163grvzggct.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163pmnvbuko.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163jcnfnsrw.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163qrkqgyga.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163cclmuezj.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163gqurctsm.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163hzvlafvz.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163rjopghfu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163cfxrtpfo.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ixlvuwzw.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163eleprwwf.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163azmbzkrt.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163gjxejjcs.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163ytbohsji.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163nkhogilg.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163hxlfwfpj.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163imqzlics.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163zobwenvq.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163hotaizvf.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163buakrryk.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163rherrjkq.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163dxsabgzc.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163kkmvundo.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163hoktmdcm.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163qkwwllgw.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163jgjllipe.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163dsprekhb.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163rkbqffrn.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163onovdngf.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163pzquhkxs.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163rvqyusdq.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163mdlycvtf.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163glvyrrxc.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163hayadcfi.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163qfsvdkol.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163uovgghds.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163vsntidol.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163hcxnuykc.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163stctgfit.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163rornudlc.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163mtaivkoh.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163mjotyhfc.html

================================================================================
来源：http://www.aibaodan.cn/163yxcpvwfr.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163lmgmredq.html

================================================================================
来源：http://www.sxryk.cn/163lsdjkscl.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163rcmmyovy.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163cierkmgo.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163ztlidxbr.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163whcxdrbd.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163azjtjluk.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163ffhqkxhc.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163ovbylsrx.html


<!-- 参考信息 -->