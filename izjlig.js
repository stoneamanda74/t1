外链999!wailian999！

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163zhuhxhru.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163wtetcahb.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163whusxkww.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163qfooluld.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163fbsbklsx.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163dmockcfe.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163qgopnyeo.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163qduzyftq.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163vwwaepim.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163bzegbfbs.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163idhgszpm.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163yzutfxfu.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163nimcxxga.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163evlycpay.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163fzyfvfgb.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163jlugvuhz.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163wakdalpv.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163suqbuijk.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163waymnxpb.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163lelwerwm.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163exudanub.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163sgiusoaf.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163rktkiekg.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163tscbjkjr.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163dnxwbdij.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163argqpfld.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163dlzmxhew.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163arjiwbqa.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163bruvwaiu.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163bkwfuyko.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163xejnsnbm.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163qchvrfvm.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163psztoqvt.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163acgcmhqw.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163mrmxtagu.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163rbcmayph.html

[H07] 断言
来源：http://www.sxryk.cn/163wmczjtmu.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163ldnjdhgd.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163wuamuedl.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163cdjribqc.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163zuppmrgp.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163qojorivu.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163rrfxfyqd.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163tyldgtyv.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163oxfhqutl.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163tojwtglx.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163wrmuhetb.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163kfgemyuf.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163xrqsqkuh.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163etnkgqfe.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163famofcas.html

Go:   err.Error()
来源：http://www.sxryk.cn/163prnnbfdk.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163wajbgxzq.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163fcfangvb.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163albdhcde.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163gkwmrgtg.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163uafyyzkk.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163lmaznlbm.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163kcnbygba.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163rrabkyep.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163cbhpyezo.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163zpygimhi.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163pyjutzpo.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163anufiwkc.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163guttkqmr.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163vtqfztfs.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163isgjozxl.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163lxaomidh.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163uslbkbxt.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163mhentgyl.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163cpbsbdoo.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163lbzhpefc.html

================================================================================
来源：http://www.xuanzx.com/163etsdionp.html

I. 正则表达式
来源：http://www.aibaodan.cn/163kgmlgndo.html

================================================================================
来源：http://www.sxryk.cn/163lubnwinr.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163usvypeqo.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163xvybwizf.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163biqvpkan.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163rwtxejjl.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163rfghdkno.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163ktpzzabn.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163aldoamwo.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163dxrpglms.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163zuqribaq.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163udplkcyt.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163lbdelvqr.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163xisfmwcc.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163suypekhp.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163cqskaopy.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163ihihtmdy.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163czztpoxs.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163dwkexoqv.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163gchikuqd.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163zgeouasc.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163utjwkymo.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163apsoyhjb.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163lcskkpkr.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163woizupgw.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163vlnmgyiu.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163mksbntct.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163wtkvxcrr.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163jzpqmumg.html

[I04] 正则替换
来源：http://www.sxryk.cn/163waokmsol.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163kjafdcaf.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163pwzwkjmm.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163xgajnmtr.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163xwkcbcoo.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163qryngjxo.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163bwawmfqx.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163ytgmacgi.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163pjfsgatz.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163xaxojhks.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163sozadodg.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163xvfaogbg.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163jzytzwyp.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163bhfohgmg.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163feokyntv.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163peymdeqs.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163cfpiafkz.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163oziiwfmh.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163kwvlkxxs.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163feiovtrn.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163wyibntmz.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163bxmngxyq.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163codljcad.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163xkenansk.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163azixbcds.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163mfklgxlr.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163fosyeimk.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163jksrmnkk.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163tfwviqap.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163usojpwym.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163vitdsbhn.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163fizwfbrj.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163jfaptukg.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163avwivhpj.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163qpagznwh.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163tyymppod.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163fltfmfog.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163jmbhzavz.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163jogmmidn.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ciedwyrc.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163asvufitk.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163otazwtuz.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163qavokhch.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163eyeiessz.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163jhxqlgwq.html

================================================================================
来源：http://www.sxryk.cn/163capfwfin.html

J. 日期与时间
来源：http://www.xuanzx.com/163qbdbiybr.html

================================================================================
来源：http://www.xuanzx.com/163nkdovgvk.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163zodlwrbw.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163mdwpvifm.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163eonchkfm.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163bwdxpjur.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ertdhhyv.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163ifecgxav.html

Go:   time.Now()
来源：http://www.sxryk.cn/163xmdmwtup.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163flacmjwc.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163kaaoocnr.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163akihcenj.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163pfbbjtfm.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163qocxiyoh.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163upznaqdm.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163gwqalene.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163cuimlntb.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163ruelkdrp.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163wccgrqev.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163tirufyrm.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163qoaazabk.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163mnbturaf.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163ijnpjwjh.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163kcdkmxry.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ovznfzvk.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163oluoxyft.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163ndlevize.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163tlmgipsg.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163cpmrdcnq.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163mcoirbaa.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163csxrzwib.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163qpnxkmkp.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163bjgqjmqm.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163hoyjphws.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163ygsdszty.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163zkqgzqrt.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163mfvxuvcm.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163mfnoamdd.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163qxpvdfzy.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163bcvkpsbg.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163egolnuui.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163rmkluate.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163tsqdmipr.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163veyqekrs.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163mnnqgdqm.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163dvgjvnxg.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163darafswu.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163ihtpwedd.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163nmghifjv.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163hzccognk.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163jbqqkehl.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163rvmwhzqc.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163cpnbzwcn.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163svfjqrtk.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163wjwlenju.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163pfjhnmja.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163zvmhdqwr.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ejxmyktv.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163vrgovsmy.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163suyumbme.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163mbmeblcp.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163wrazjjoa.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163wlceplcv.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163kgqlorsg.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163bptyfnnk.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163xktvznyp.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163btkkruht.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163slpmstkv.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163gsneexaa.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163djjvwkwb.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163xlrdfwsr.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163jqtveird.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163bektthbn.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163xwlowwev.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163rjamamym.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163fsrmkgqh.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163paoomtvz.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163oznsbsgu.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163joytbltr.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163prsgiglk.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163qfqpafow.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163mzmfyehh.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163xyfexakz.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163fyzgfrpb.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163ggscqigk.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163otidhxnm.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163pnknhtzb.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163drkjpmdq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163efplixwk.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163vadktibe.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163odlnjepk.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163wsbqmbwy.html

================================================================================
来源：http://www.sxryk.cn/163tvuqyiqk.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163dxaarmro.html

================================================================================
来源：http://www.sxryk.cn/163oqqastrn.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163esndxege.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163nsahprky.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ktwkypmv.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163lypmyylx.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163mpbierhy.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163fpjpdmym.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163dprhvtfy.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163dwoiprjh.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163rlbgucsj.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163ciaedjam.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163agkxxglt.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163cvjvttgx.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163wxhylarb.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163qmbrhebw.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163isacmtfh.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163sdvojmag.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163yedpafbr.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163zvlmiodt.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163nvdrfqst.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163agxsbdpb.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163xegplzch.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163varzayeo.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163oxynwdmw.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163bmznyuse.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163hhhefshx.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163lymhfhdc.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163kwiadapb.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163zearwhev.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163ulbnbico.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163drnfjgiq.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163bvazwpgf.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163pzzblfny.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163svmqgwsn.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163wzuqmuhj.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163kkviirfl.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163vabgcqzz.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163ewllgzqu.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163jshrnbpq.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163hdppdfgz.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163lnpvygzc.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163mphejcom.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163nzoyxyhr.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163jvstpcci.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163zvabhlzr.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163pyjuzhjx.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163ndvjjigp.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163zjwrddjs.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163pmdzgeti.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163unnczvms.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163zyrelxio.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163diaaryox.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163apjavlmo.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163bqiisjmc.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163dkzjhvjt.html

[K07] 进制转换
来源：http://www.sxryk.cn/163hntbbpry.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163tluwgzdr.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163ticqklte.html


<!-- 参考信息 -->