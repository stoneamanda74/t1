外链999!wailian999！

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163ujoyrbvj.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163xjmpgsnu.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163duoheuqf.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163phiwqyqc.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163qutelznp.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163dkmxyhuw.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163lrjcddcx.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163xoofbbza.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163gnoxvdrz.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163wkygrgyo.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163pgrvqzfd.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163intyfcpd.html

[H07] 断言
来源：http://www.xuanzx.com/163ptwatnmb.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163xzugasfm.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163zvxzujey.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163xbzlnewl.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163xkrgecfa.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163oefkkegg.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163nragbmdg.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163atqxfrxw.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163kcxscips.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163plilmtnu.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163zfjkgtry.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163foglhqlj.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163dtamabre.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163voaeceqw.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163yhpxsmdo.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163hrikvpoy.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163adczzdoq.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163jblctybb.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163wssogkij.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163yxhxxvvd.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163dpaoewzr.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163grtadjov.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163qlheyrgd.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163ipjqhuxd.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163xdetsaqg.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163tggrbcsu.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163wwnttltm.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163thrrzdrh.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163athnffpk.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163hqrczaxj.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ajxnpfdi.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163vzdksxzw.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163dsfcjahw.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163kzsnmwvz.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163wijgvfsu.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163tavtsyfv.html

================================================================================
来源：http://www.sxryk.cn/163chbobdkp.html

I. 正则表达式
来源：http://www.aibaodan.cn/163pvqtwybt.html

================================================================================
来源：http://www.xuanzx.com/163jkinjgda.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163oiqehskw.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163otbbemtm.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163inrsoumz.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163frbawepx.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163tugnxona.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163czgfhtds.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163ltuwghjx.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163nvctapby.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163usjezueu.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163gbhirpwm.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163jgmxvwtl.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163czxtxtde.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163blctkpgg.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163lqkrjwhp.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163bfhxghvk.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163okqrtthe.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163ryhoxlod.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163gtmimflu.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163yrbpkrxo.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163dfqplvmc.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163cedbyykv.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163anidxypp.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163tclfumlr.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163xgwftamk.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163iotneboa.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163bfgbhnda.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163xuyhmqan.html

[I04] 正则替换
来源：http://www.xuanzx.com/163oiploxch.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163irnqrpfc.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163uyjzbokz.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163tnrxqznv.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163dawwiehq.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163bfguglhk.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163kuvmjzyv.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163vtxddyzq.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163sdmbyzfg.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163nqbjvmso.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163lsgdiqeu.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163ipwhrkul.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163epfnnegz.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163kqrydfbg.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163hfjyocuq.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163pmlupeya.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163rirfvmii.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163dcuzkqdr.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163vngzyqrm.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163skoxatcf.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163fdyianum.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163texnmwsw.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163okqqnshf.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163ufruriku.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163reazporg.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163nrpbsdit.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163msgoiazv.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163wvoxxbab.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163qnklqtmm.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163fjdxiqgc.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163gshulokl.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163azjtoyue.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163euapggch.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163rcplzpoa.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163pzxzziib.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163edzpdvmf.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163kujtvaus.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163yzspkyfs.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163upnrdrxw.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ncswkspc.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163lxvmzieg.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163ayezlvlq.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163delsnfoa.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163rolahorj.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163mpphebhk.html

================================================================================
来源：http://www.xuanzx.com/163mrwrpgly.html

J. 日期与时间
来源：http://www.xuanzx.com/163qyltswrt.html

================================================================================
来源：http://www.xuanzx.com/163woubfubd.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163zsiiwxtm.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163efbrlhjg.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163zufhgbki.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ytlsfaiq.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163hopcgsgs.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163kfwnmqby.html

Go:   time.Now()
来源：http://www.xuanzx.com/163kqrwelpk.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163xnwngovg.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163qmwvdnos.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163zkcvzhbo.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163gfksrdxe.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163zfufhvsz.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163xpwjogam.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163yquvnnaw.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163oaypriam.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163jkwhbccj.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163qrdflhwl.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163udjjfivf.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163efxdexwq.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163yqumxbit.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163zaantneu.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163mlmlzyxq.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163zozhmqel.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163jbkvudev.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163cnnpahgy.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163srgodxzl.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163zdgujmjv.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163vqoysuem.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163evroxwls.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163gafhnetd.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163dsrsyflt.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163mbviennp.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163mqlkjelh.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163dijtcdev.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163jrdqqeqk.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163xccjwuxd.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163ouaqgbxw.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163ublojbmh.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163ajzryrix.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163cqgilgew.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163urzocwnp.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163apmlfakd.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163ddfprrbi.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163beakxath.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163yjtgnpcx.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163ojcmplok.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163lqjyplgv.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163vmsdmiax.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163rzcxfwdm.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163agjflead.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163qrogjbvj.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163qzytrxno.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163qpjtkjuy.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163crqrawyz.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163yabnoojz.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163qtjgcqzd.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163rolgzeil.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163mfacqdlr.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163rskslnad.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163boorbhpy.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163axebpela.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163rpwqcbwz.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163tbrzneoz.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163prjhmqwh.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163awlibgxu.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163yabsgxxl.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163fkscadgv.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163mubbpjlt.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163zbxvcziy.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163scojpcvb.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163xsqkpsxe.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163ywdxwtju.html

[J09] 时区处理
来源：http://www.xuanzx.com/163qqkczxvc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163pkvnwpvq.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163ybwitrux.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163blylpprd.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163rupvaxac.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163cjzbcegc.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163ihkfelpq.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163pgzpough.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163xbrzlhyq.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163ltdxvuzu.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163bvmlfsag.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163nlbqvdji.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163dwirbcku.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163egmuuzih.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163osnxcqpo.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163prouahml.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163rwjyhatm.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163adxguseu.html

================================================================================
来源：http://www.aibaodan.cn/163tkprryai.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163bnznrbzd.html

================================================================================
来源：http://www.xuanzx.com/163wlmmnfdd.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163htasxdkf.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163vylvmmss.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163amphjste.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163codufcio.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163krpdkvqy.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163brlksmau.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163jwnyioip.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163eqrzywey.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163nnrhrnwz.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163wsaadojh.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163umwmkxkx.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163afvurrmv.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163zlcrkvxd.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163mgypvfph.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163tuszcoxw.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ewvwcfay.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163nweqnjcf.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163uywhxlll.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163vyiuoers.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163vyoeuyon.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163lxngqyln.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163jxtqnlis.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163tgoctonc.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163ulgjwgrx.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163wgjxgqbi.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163zcccgdsu.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163jmmhqqxy.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163tntyxpzz.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163jksglsyw.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163tirbshdv.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163zdegzgfj.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ewksjrcq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163nwskavhy.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163xcdcfpix.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163ckdwspsk.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163hjsaavrc.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163vzsbwpkv.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163rcgcslcf.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163vmczwmdd.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163fpefunfr.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163zbcmntxw.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163cwxbqxir.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163ruaqqymu.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163ftxpioem.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163tqvwhiem.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163hjjzklwd.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163ogglojgu.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163ntcbyxqm.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163zjlotgxl.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163iekdmpxz.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163xhbdsxgf.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163jnbtnvud.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163ykibbtfy.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163qttjjbhf.html

[K07] 进制转换
来源：http://www.sxryk.cn/163ykxgbipq.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163zpvbcpht.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163ibvgnopu.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163dnlzgnye.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163hxksjuph.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163xemufsxb.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163vblecdcd.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163jyqgefft.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163zyxegzin.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163txwultne.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163dwgdwqqw.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163lcdonyuj.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163mknvznin.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163jcdxgypj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163ymwsrzxf.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163ypalqolg.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163ndigfujo.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163fmpaxctm.html

================================================================================
来源：http://www.aibaodan.cn/163usxvpoir.html

L. 网络请求
来源：http://www.sxryk.cn/163zmoqdbqq.html

================================================================================
来源：http://www.aibaodan.cn/163vqkrrhoq.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163feagjaer.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163pnrovpcg.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163cnauluqx.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163ullhipvm.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163wvedozoo.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163lhxjsmts.html


<!-- 参考信息 -->