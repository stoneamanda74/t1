外链999!wailian999！

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ojkkjcbk.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163uifbhqyf.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163xkjqtdfe.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163kqcmeduq.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163tkoiqbsa.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163gvcmldwk.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163nbyhkgay.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163qidbbtim.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163uxiytbch.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163zxnpdkss.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163uahbzosg.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163komwzwgz.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163ywafimhg.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163susvtfxp.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163slgjfchs.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163zlbrqrwm.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163wwmdhhzo.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163uperucki.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ihgiezyk.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163oghflivk.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163yodlcypr.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163qywxwher.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163aixldclh.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163gumqnobe.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163ztbjhvxp.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163jqbcamux.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163pgqghsst.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ifjxkcue.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163kisnrywp.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163nsvqswek.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163vtooztfn.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163zocwxxbm.html

[H07] 断言
来源：http://www.xuanzx.com/163pyjxftbi.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163yfkgfvhq.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163gisiukez.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163iewfzcxm.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163sizksyex.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163ycguenmq.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163demroiwe.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163rgrwnrlz.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163suzywrwr.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163yxuszynp.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163bsjpkomx.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163xjeeekjm.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163xpgesiwn.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163wfbmeawg.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163qmbjbniy.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163xgrfqbng.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163ueliikhw.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163dazaocag.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163chunxowz.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163imnjodyz.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163pilefbxs.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163fcucusny.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163etqksybt.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163raeegjqt.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163jsnbdzfv.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163kxgyevcn.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163kbzygoae.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163aawmctye.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163exiovipg.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163nwqsqpxe.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163jcfykewo.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163iolwhcyq.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163alcdqnpy.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163onxsxswn.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163qgddhtcm.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163cluxyyur.html

================================================================================
来源：http://www.sxryk.cn/163smnbdhak.html

I. 正则表达式
来源：http://www.xuanzx.com/163dtnqahzv.html

================================================================================
来源：http://www.xuanzx.com/163redtvcql.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163dtdovbzw.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163pyodnros.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163iwqxrujm.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163roabrelw.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ulgjwswj.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163qdqqffwc.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163vddllufc.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163vpdbgxwa.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163guyoyhmu.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163uibrsvzr.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163mdcrfyva.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163vywoiard.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163awslmqxl.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163bdguzywh.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163oybtxrjf.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163atcovmqw.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163ekzpbezi.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163votjcllk.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163oahdkvlx.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163cggepeqq.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163slftwopj.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163kcjmtwur.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163lphoyoeh.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163aqgbfghl.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163dvmdynag.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163vvnnvlev.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163anyhdfoi.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163bbohcvda.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163chaolspd.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163tllepjho.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163zmbedkow.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163tysafxmd.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163qsznquin.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163mmbgnxfh.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163obyliyst.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163odpjgwaq.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163bfvnhuml.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163qrxfgvje.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163qgzfxtdr.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163lcfhhomk.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163tusgmanj.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163xnihnuxu.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163wxmqcxca.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163zvnobjxa.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163ugujuxys.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163eejygstc.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163orpckexw.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163wucrwqfl.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163tdgwwkmt.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163mylkdnds.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163iwlryzag.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163qrkzihgi.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163dlofiowh.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163mgggsmep.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163mqwljwpi.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163dzioyuij.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163ntbhwhip.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163dukgjbxg.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163urfhyhwp.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163sysbzbet.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163yqtflsrt.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163criyzaoc.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163iwrongxs.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163uokxblxx.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163ystlfjdt.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163dzzftrpz.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163abeqrlvy.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163emokuwxs.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163yshygzvq.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163vaeuokgw.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163sjpivfny.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163dtvqgkpc.html

================================================================================
来源：http://www.sxryk.cn/163mxcgltfb.html

J. 日期与时间
来源：http://www.aibaodan.cn/163gubmyejv.html

================================================================================
来源：http://www.xuanzx.com/163rpikgzwt.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163tdkpoake.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163xnoyghup.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163miyekunn.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163atoxhjzc.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163bujksppy.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163jtcyibrx.html

Go:   time.Now()
来源：http://www.sxryk.cn/163zhdfrdgj.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163btbceyef.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163becfwptt.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163raycdcye.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163vcbdaydv.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163hcgfrkor.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163fyxbrrdp.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163shisgwev.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163hjylbqsz.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163upyzdpiq.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163zmpjlipj.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163oaybehfx.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163rnfxkwrs.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163nlfiqrpu.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163rzlybtro.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163hpkmtrut.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163btahghtb.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163vyloresy.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163fwlcahkn.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163hvlgccya.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163xsuxfjtk.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163rtktvurn.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163uzwyaouy.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163xfighldd.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163yzubligx.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163imnhgasy.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163ecisoamd.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163yantxwtn.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163flleomwe.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163djspkgnv.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163ziohelxc.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163mbejdfdx.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163udbuvodx.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163vpdheijx.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163yeayvueb.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163jyzdxuci.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163cfnewsqf.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163omhwxaas.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163ddtfjees.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163iygdmehu.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163vdikvygd.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163ateqrspb.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163yrewwdxd.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163skufgdax.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163juwbjnms.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163lpbcfzlw.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163ypdpruec.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163phxsogei.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163zotjjies.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163vtuvokqf.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163cdldzznq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163jfeakhvo.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163wzylxhik.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163wzhjkwvw.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163wwrzlykb.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163nlsxtpqx.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163sanfjweu.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163ntfdwxqj.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163psvqvbtb.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163dkrlqmvz.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163fvlwsrbp.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163zrqppmpy.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163rtxegahm.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163hkpiokjx.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163htdllybv.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163gmpkynfh.html

[J09] 时区处理
来源：http://www.xuanzx.com/163hekvtbuu.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163dteqzdzj.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163grqxbjkc.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163mdvarwyd.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ychbuikd.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163hfivbcxd.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163vejwpaeb.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163kbhzhawq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163xhbuuirz.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163ojrzbltb.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163hkckxzxw.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163vcnpxdxd.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163okjemsdg.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163zidxvapd.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163kgfdafrb.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163dbmrztzj.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163jmvvtkyr.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163uczskmdi.html

================================================================================
来源：http://www.xuanzx.com/163ehegvkby.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163cksjevdp.html

================================================================================
来源：http://www.aibaodan.cn/163crmmnbbe.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163fzpzalyf.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163njlotiaa.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163nqdhaqek.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163pcdsptmw.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163tzujvarj.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163fzjnovwb.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163gwjfbdve.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163xqhrbhzz.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163zbvzgggk.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163xmurujli.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163yrkdwgjp.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163weitrmgi.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163waqpzavf.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163oudqmnwr.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163vafsihuy.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163gzbhdeam.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163lechccio.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163iockcjaa.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163hinessiz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163jvinnmqi.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ortgfgfv.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163fczrdwat.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163thhjkxmu.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163pridwsvd.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163phieuzkk.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163gpxihikb.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163rmzyesnk.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163pfnismmh.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163jdefjlgi.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163leqcugsn.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163wzbijnso.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163teqbvfqr.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163yljkfbli.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163kbsazxfa.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163twtokutc.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163upyoqbws.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163qgozgbip.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163yozihmhc.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163fxmjcekm.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163bhjcivks.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163lembncko.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163krarzaim.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163zrqwtxme.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163aznlevrb.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163sqrcuwbk.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163pakgjdss.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163yhodkkoi.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163cnjgnzdl.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163dbhebaon.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163cijdtlkd.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163cdjvoctz.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163ukmddjvd.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163pgnzcmyp.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163pvreufxf.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163nnxtszyu.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163ulnwnyqv.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163hlsrlndc.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qaxhybmv.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163jrkzesmd.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163rectywub.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163vopkxhtm.html


<!-- 参考信息 -->