外链999!wailian999！

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163ddnnpldj.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163kjlrurcq.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163vgnvvegb.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163nfuxpoiu.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163lskxbvxk.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163fudpkngp.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163ygdizvsq.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163rfobhsca.html

================================================================================
来源：http://www.sxryk.cn/163bqbojmhz.html

I. 正则表达式
来源：http://www.xuanzx.com/163jjtxyvec.html

================================================================================
来源：http://www.xuanzx.com/163dtcdxogq.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163nbqioyur.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163gwkydbvr.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163niboxwfv.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163exwkspjx.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163jziagnzt.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163sjzwqoax.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163zuleavdk.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163eqczjiko.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163fctctzpb.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163ybexnawp.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163cpnwmhee.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163lqzxgnjf.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163hpujzdno.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163ewbtiyqb.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163pazjezvf.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163dlwfipmp.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163jrqsmumk.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163teufbphl.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163utqjkvmw.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163hjemfpbo.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163wrxidgfv.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163zuyckqmz.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163ymleuxwx.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163gitinnth.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163wchfmsop.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163jaqmubon.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163keldaqzw.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163yloerrdr.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163gtgndovb.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163jlnwgyio.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163jfwxcnal.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ooaiaoul.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163yshdeajb.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163fidrzrpt.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163nrcbpapn.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163oiblwwsh.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163kzsysdlf.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163zcxfcvjg.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163vjfrsppa.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163jxhdixrx.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163bzlibrtv.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163hdtuyies.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163uhgevhyr.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163fwipuuuv.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163qnvngfqc.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163jnekphlo.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163xneirtwg.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163kyzuwsbm.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163teofnzyd.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163krldvhuk.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163dvjykeiu.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163wgglfbfw.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163yhkkwjnz.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163gugqarhu.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163arehnwkx.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163wclgkhvh.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163jfvdwhdw.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163aexkasji.html

TS:   /error/gim
来源：http://www.sxryk.cn/163gqjscqoc.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163xltbtdus.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163yrmlyswy.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163ogesmede.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163prgcubsh.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163sjdwgncs.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163llricqou.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163wreunqte.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ouzhpmij.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ykenvbuh.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163dparrgjz.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163pwsppkom.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163bbirwigb.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163wktntrvu.html

================================================================================
来源：http://www.sxryk.cn/163blzltmyy.html

J. 日期与时间
来源：http://www.sxryk.cn/163aocfbtix.html

================================================================================
来源：http://www.xuanzx.com/163urgssubm.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163lwubmayc.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163bnyeoarg.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163nxlhsaxe.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163fhokorix.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163hvtyfifa.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163ovithqfm.html

Go:   time.Now()
来源：http://www.xuanzx.com/163xqdlbgnc.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163vukcmmnu.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163ashmseal.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163clcbnivz.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163gpbqilxg.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163mufjbfox.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163gmnjmufl.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163zxtiawhi.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163wacvqbjj.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163lqkpcyka.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163dolfgcnj.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163mzvyhfda.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163vqcmkexn.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163monotipu.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163qhovstuv.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ycapdkxt.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163adplpzqk.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163xcwkjzfu.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163npryxjjj.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163nxdcvwrm.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163egevvlzo.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163vusipbij.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163iqefiqmi.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163paxbsvut.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163judlupuq.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163hlokfmba.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163cikbfiyc.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163azekpzdq.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163vogpxqpr.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163pdzejgev.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163pchksydj.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163gioutmqw.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163maquazsh.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163bcbajeee.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163lxiiltdu.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163dhxgcfde.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163riofdbnr.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163xhwidrcp.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163lbyiikrj.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163tfrfzqyf.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163efscymbn.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163leuhnnek.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163syrwliql.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163csnqcpnk.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163gguybgbz.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163kulqetud.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163kandwhyq.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163lfwwlshw.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163rpsritla.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163oeqvbpio.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163fyycdtad.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163sqksuolu.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163wazreaxg.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163cootbirn.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163gmqtsvyz.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163eoiloksf.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163vnqvlvyw.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163ldfxxxki.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163thldswjv.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163nzisxfjm.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163barwsxfl.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163jllzkdsb.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163xgvkkblz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163exnxvblz.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163iyuqwasy.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163azhwdcpj.html

[J09] 时区处理
来源：http://www.sxryk.cn/163qglugevw.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163tebdklxd.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163xrczcayr.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163gizcyeut.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163makwsevy.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163rvvievag.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163raueomlh.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163agyblmfm.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163immxxarf.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163yjnfiyxo.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163dewkeume.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163piqzvkhj.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163kpsyhjor.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163falgpybz.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163hilhtwbk.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163ndavsell.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163yfmfsjad.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163omxuowqa.html

================================================================================
来源：http://www.xuanzx.com/163xdqdysls.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163mhgplzzn.html

================================================================================
来源：http://www.xuanzx.com/163vqlnefsm.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163ajkdesdw.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163earyyldn.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163vqkppgyq.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163wgdlyhqw.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163hoszhbje.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163bbmkpiyk.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163bokhoxlo.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163kixklbio.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163tnrhksjw.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163yqacuyqy.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163azaibvsp.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163lpjlwraw.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163xeronlgp.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ndyosxgh.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163lhaziymj.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163kucwyegy.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163qgsarqkv.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163wvdjoqsv.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163rhsucimx.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ciudjnkd.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163kjdfaqxt.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163hdfwljyb.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163qbmbymsu.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163buyplcfz.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163cqkjvgcu.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163oexaesrr.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163hgjrreyk.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163jtvzmenl.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163dmbmickh.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163rsnvaggr.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163spvcpyme.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163hmyubgvd.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163jqwzutnf.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163qgscohxb.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163yaqkarsx.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163grnwlsyj.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163cacbhnig.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163eszlzeqf.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163kfnzfchm.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163jyraytxh.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163uswbjibc.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163btjrpbas.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163skugdlvd.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163xyyclgqy.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163pthcyibc.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163xwqblyyf.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163rnealoaw.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163jcnbqddn.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163brdsjjzb.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163xjobnltw.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163fwuaqzne.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163wxhqqsbt.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163zkadywse.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163imxhghps.html

[K07] 进制转换
来源：http://www.sxryk.cn/163ilcrvmhr.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163upzifbpx.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163uavesimj.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163zbcjhjhv.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163lituomeu.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163fzhfpgnv.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163wdwlwxby.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163twdsnehq.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163fgpgkkno.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163ujxkulff.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163wvkxomie.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163rmzyrugy.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163rovjqgid.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163wiipkijo.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163ayjheysx.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163llbmhigu.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163wlepzxlw.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163dlonzmhy.html

================================================================================
来源：http://www.xuanzx.com/163cqhnutso.html

L. 网络请求
来源：http://www.sxryk.cn/163vwqyepzh.html

================================================================================
来源：http://www.aibaodan.cn/163gbcjsemu.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163fzhqxiek.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163wceuhguv.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163yuhzfzgd.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163bsczowcr.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163hzqutnjk.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163fwcswyiz.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163sirbmbxz.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ruphpbru.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163djwmkfji.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163ajthdwmd.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163dymzjzmf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163unxlpwpg.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ikxqcnda.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163meqzbugd.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163qgeahvru.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163itnpbsth.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163ayxzbaco.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163akklinmg.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163khufrcuk.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163rcoxxavl.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163zumhjoii.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163weqhmkoh.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163mxclmthd.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163mrsheuuu.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163wjotitep.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163uyxgalje.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163arxowybw.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163izfuqzzg.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163txmbzvrq.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163vjegmvjj.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163pkzhxcyd.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163mordteto.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163emmvkdye.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163bfcbiagd.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163rrixernd.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163ngpdurqw.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163likwjfof.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163mhcqkxrw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163mmcrdmqp.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ycnnhidm.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163nhrkpyui.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163vhejaykm.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163isgvybud.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163wuhrndry.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163xmolthfy.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163gcokabyl.html


<!-- 参考信息 -->