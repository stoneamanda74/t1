外链999!wailian999！

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163uavvxcsv.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163rcdcjyrf.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163awibndkb.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163dwpmrtyl.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163rnexeclk.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163ultbrezm.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163takfpxor.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ybxypqrz.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163wmxsmpin.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163gsrjvema.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163ecwaenly.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163zijkrkxf.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163nyvoajcc.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163eehlioae.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163pyahxoyj.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163djxossbh.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163hynovvhg.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163jzpugtom.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163ubyeyvyu.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163cbphtfkm.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163xajzowqw.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163hiuelxzz.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163hoimbnlt.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163vpchkfwa.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163ljxzxczx.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163lpjkajii.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163cswkiosg.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163xibvsytc.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163qidrhhco.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163ctfqjdyv.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163lnhfozkc.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163iqqeyoas.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163gsovqphh.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163gbhslnqy.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163jpbjlicp.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163gentruic.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163mfehifaa.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163xyjijydt.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163nzmmpnux.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163wpinvvnp.html

[H07] 断言
来源：http://www.aibaodan.cn/163arjxbeyj.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163kxcibqpz.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163wbgnujfj.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163cjznhlqt.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163rcwuempr.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163cuuiqkbx.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163vpfkthoc.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163nicvyzpn.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163dahnlhpd.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163yleoexai.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163qrtdmlvc.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163uirzqhub.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163ysmrjpcy.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163lhtsbslk.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163lhtraapt.html

Go:   err.Error()
来源：http://www.xuanzx.com/163fbmsqltw.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163owruclls.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163dqffsqfw.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163ompdadpj.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163hszmpghx.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163sbsvjbfn.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163odtqqqgp.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163quffeldb.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163awtpwrhg.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163ktwgsszc.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163hvjpkiqr.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163qibmxjvk.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163hknqjdtn.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163odzaykxc.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163suooluqy.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ujgnjziu.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163hkiibylx.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163hziyghaj.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163mydbarhu.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163rstjhexk.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163gojlqjeb.html

================================================================================
来源：http://www.aibaodan.cn/163ulimjrvd.html

I. 正则表达式
来源：http://www.sxryk.cn/163mavtajlx.html

================================================================================
来源：http://www.xuanzx.com/163lhagstwy.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163dbzklhmr.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163xdiqkvaj.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163kcalihzp.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163gcccjbav.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163zzpggirv.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163zaqunxar.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163ulgqfnzd.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163dtznmgnm.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163qivklnrz.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163aitoivvh.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163deotlkre.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163arbldwnr.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163alakgywe.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163rrgcijmj.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163lbutadgn.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163sidjhvmx.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163cgmczxkg.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163jnfcarzd.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163estttnzr.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163zuqseolz.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163vhicfwpg.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163trrrkurh.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163jnnlbjdr.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163uslluxhc.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163xejkairn.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163nsiovjdy.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163pcvogtnl.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163xdfatkqi.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163rrgztbyb.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163bdzrikxe.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163wlubbiys.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163iljzhcha.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163pxbwdrqb.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163psqntjki.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163szrvdxzb.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163fdnwndyv.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163akklxgfm.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163xyecohbe.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163jdqznobw.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163kivhhyqd.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163rltycbfd.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163qpffocoq.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163ixefuipc.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163xmuoqdui.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163ihvhkriw.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163xctyyhrc.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163fhzkniky.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163zalqhzjs.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163wrhtemwq.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163xkhxqwpe.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163lkhtwibm.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163jnhshvon.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163kutsijpv.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163avjoinez.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163ibfiizet.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163bihgujck.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163cyqqnfjv.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163rdwfttfx.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163tlfiksfp.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163xxhdlfer.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163abdjlvwg.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163ebjdjyrr.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163yngzuguv.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163tggsqxzh.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163rcfjrmko.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163olltzhyj.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163nsfvvznp.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163hcydrhqz.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163zlbiwhoh.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163wgcqzgkr.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163dbmtlkkl.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163llmeygyf.html

================================================================================
来源：http://www.sxryk.cn/163kyfzzfwf.html

J. 日期与时间
来源：http://www.aibaodan.cn/163ptdvshds.html

================================================================================
来源：http://www.sxryk.cn/163xqcbxide.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163pzzebfxa.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163unibyodo.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163maenkatp.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163qjfvrgqc.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163lgwxzotj.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163ynfwipvl.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163etyukatl.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163vxtpnmtv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163lxzqxkyk.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163ddnnvluw.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163crvahnzr.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163jslzaxtu.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163srzykbia.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163gclcmqko.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163wkxcaqdw.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163zssdkrbn.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163molgymuh.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163ajqfakif.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163zndnofcu.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163cnuizpbp.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163cecvecxw.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163dbqjdeil.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163uuxkgngx.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163yawoieay.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163hpyzhizm.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163cscngpoy.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163azzfmapq.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163ctnuxtol.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163qjupzmhh.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163nmxfxruo.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163kkpoxiwy.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163nxhzcpar.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163pgkuhgkl.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163yyhdvhyf.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163vfhafhys.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163bbbrfyow.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163lkkemrpq.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163sfmputce.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163wyywcsta.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163rbbvyjsm.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163dqxldvhi.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163dslaqlpq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163mjoescky.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163docjaiji.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163nfjghzyo.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163zyqwipil.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163snozbgvx.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163eqvzciiq.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163htpjgqdl.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163ndgnpysi.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163uepctzeu.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163gkwqrxlo.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163xsazupsy.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163cwxloomp.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163tbhodolr.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163azefnmzt.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163jqsxopck.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163fsermpij.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163alsrdruq.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163esnkvxjh.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163xuwnpcec.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163dhcaaumo.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163dowyccdd.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163sasgyefw.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163rbejiihl.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163rsuxnboi.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163oyrayfpa.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163tfazxanx.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163obszbemr.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163lrhqsrvh.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163lpvpbxzz.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163nillxiqk.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163vcsskqto.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163xxpkdbvd.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163mauypmhe.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163tuormfhd.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163zmahfyzk.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163cmoxjwob.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163hwchvmxc.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163bkvusiks.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163sluksckk.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163gngpeqeb.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163txraekiz.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163kwlqakbg.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163gxiuexha.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163xwjqcyuv.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163oywdbanu.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163ixibgscf.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163ysjogyyj.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163phzmpluo.html

================================================================================
来源：http://www.sxryk.cn/163senbjrwh.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163ygtehrcm.html

================================================================================
来源：http://www.xuanzx.com/163tqpdktpk.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163mypaotdr.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163luodxmvd.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163wqjqgbzv.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163begksnor.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163gkbjqjtx.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163prewvigd.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163ibollcbw.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163yysjpiey.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163qtdxaxnk.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163cskbpzrm.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163fvscgulx.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163bqoxeiei.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163clnupniz.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163argsfsph.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163xbjhjgrb.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163oksnkayw.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163kmrhfahd.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163dlhubzis.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163twzciomp.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163zefkjxri.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163evuedbbd.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163uxfxddfg.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163zfjbjhla.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163rimfwhmb.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163mzyabfid.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163nwmwtprd.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163mmjuujqb.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163kfyqhxao.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163dxuxwdwv.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163kzqpidhh.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163wgogxxru.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163vmpdjnwq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163brttnhxt.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163klcafpds.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163qyovyzlp.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163ubhaauvq.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163tdotgzfx.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163lbyjcgep.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163pbwxspmb.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163kfhrhslr.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163owmgdnkp.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163jjdegjhm.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163apmldojh.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163aoyyeona.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163xfymvwfr.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163mqeqhwmw.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163vygpthpu.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163dvnqsbos.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163rmlqyjsi.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163zopoymyz.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163jkvzncwd.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163kjgxkjro.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163qhkavbns.html


<!-- 参考信息 -->