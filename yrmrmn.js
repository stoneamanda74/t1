外链999!wailian999！

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163eiuzonrk.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163fkyytffx.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163eujmajof.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163maugwioo.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163zuqazaxn.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163yrhmuegz.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163cawbrpev.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163uluqefod.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163oinbfdsa.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163zuwpptat.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163xouhemjg.html

================================================================================
来源：http://www.aibaodan.cn/163tntojvtc.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163vvvahako.html

================================================================================
来源：http://www.xuanzx.com/163zxugbmcv.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163pljhwgwe.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163mukyujzj.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163baawupfv.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163fppidmwd.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163strxhapm.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163eebbujwt.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163dhpattek.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163pqmpupkc.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163bgqsvlcu.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163dkpudobj.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163yzjhmwuy.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wkllcmdb.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qsszhtwo.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163gfeuwzxq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163mhipbnqk.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163cqiflwhw.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163gstacvlt.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163aimzumhx.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163qzvidttp.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163fjkmsrgs.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163jzgaoxhg.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163lcnrbogw.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163frwewdgm.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163sgcfvond.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163sbchgdie.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163vmaqequl.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163bhknczak.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163mrbsqtuu.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163qssiqadi.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163zmgwmjwq.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163jcftuntq.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163bozjsxos.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163cjksooqn.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163xodtinzg.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163kldairvu.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163txvgdipf.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163yxxmhhkb.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163aacwxgtb.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163vigzjbfz.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163mjghkqvh.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163qmhtewhm.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163tgbjqmup.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163giwidnju.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163xpzjlugi.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163iamkincu.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163vmyxnyis.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163amymuupi.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163wjmorllk.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163hmlumagu.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ubczzqie.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163oobwsfje.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163mecaamir.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163hhzbjpsh.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163fcjhpypv.html

[H07] 断言
来源：http://www.sxryk.cn/163rlnwzqva.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163nmhqykoh.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163bgunpwjz.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163izqphncd.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163cfavyfdo.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163aneetfyj.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163rvwgwzko.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163bibiklfp.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163ytvfogzr.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163ygwnfxxa.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163lwnwllwz.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163jokuhqoa.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163zdtxfruh.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163imvrwbvn.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163eaixtdhd.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163ycaaytln.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163zlypuzon.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163kgrgzgtu.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163gdynrwzm.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163anwyugan.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163onzmhepk.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163xetohbap.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163bpyvxnds.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163vynsoipi.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163dyevsdjn.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163qfjvldhd.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163yfbgmyjh.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163nskhwqio.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163bdlvqpcj.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163khilbbko.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163zubqzkjy.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163tizzzsxu.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163qkqrzzfh.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163ywcelvmd.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163iwkkkofl.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163movwguzj.html

================================================================================
来源：http://www.xuanzx.com/163hfyuzgwv.html

I. 正则表达式
来源：http://www.aibaodan.cn/163rarmwgiz.html

================================================================================
来源：http://www.sxryk.cn/163hgppmmvh.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163bugrquiv.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163ldkmtqpe.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163vfjxueif.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163warqitnc.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163womneeyu.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163sbohocmj.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163rkyqcwra.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163ztjshasn.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163uuabqeef.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163wltdqeey.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163orapuynb.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163vvtmaxxg.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163jyroxzor.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163pxiyemkw.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163qmspjqxb.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163nzylvkrd.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163birwpafu.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163hcatqcro.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163gksedhhf.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163vnwslxye.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163pfljuhew.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163eeinheih.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163vwjzysai.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163ybibdhzu.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163azvljsqe.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163hcujwllu.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163zhypplho.html

[I04] 正则替换
来源：http://www.xuanzx.com/163bnziswru.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163shweudbn.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163bphzxjiv.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163tucdljdp.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163inrsqggd.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163ffvwomkw.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163yfksdpvc.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163yaujmmtg.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163zvxmvhvf.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163zphngdnp.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163mehjqeyj.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163jxafimgu.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ilssxnej.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163mwfneovi.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163xcegvepz.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163ndkmpuvd.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163rpqsmklc.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163phxcviyq.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163fdeodyxr.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163seghhdow.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163ixutvgtz.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163dzomyiiu.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ixcnjepf.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163ypszvtmk.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163jvvknwwi.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163skrwuyhr.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ebrgeilk.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163oqmqmapx.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163fpvrwevv.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163blufpzgu.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163fxoskyyh.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163xyttvfqz.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163wlxpobxg.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163yjmuiqtg.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163ggpsuafi.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163avzgkzep.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163cbtupwng.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163ciclhscy.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163kfmlzpdl.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163mtmvknys.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163xiopexmc.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163qbowimal.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163xgoohbnj.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163tvowknon.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163fxitfxgo.html

================================================================================
来源：http://www.sxryk.cn/163sabsyacw.html

J. 日期与时间
来源：http://www.sxryk.cn/163lxsvcwzj.html

================================================================================
来源：http://www.aibaodan.cn/163kfyovjks.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163rnieuhek.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163asxwdemz.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163kghlasdn.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163sbfrbfmw.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163dhjzoncs.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163rpdzknib.html

Go:   time.Now()
来源：http://www.sxryk.cn/163xzaayfig.html

Ruby: Time.now
来源：http://www.sxryk.cn/163pntzdtus.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163gkeleaqe.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163alqettak.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163coburpfb.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163izcsdoty.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163rjdxiqiv.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163kedxmidv.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163pyzethpg.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163rioukkpw.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163jvmymqmt.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163nwjmsvzs.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163bgrrpnwj.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163zljcqnog.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163isufzamz.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163tpndkjkk.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163riikohlk.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163ktozizmm.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163hcxwtzec.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163lapkmusc.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163rvzrifdz.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163ztbqobgc.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163zdpvyaqn.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163lwqydadf.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163uuasrunx.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163ljmiqzlh.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163yxxrklpp.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163oksnwwyk.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163vnmnjluw.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163qteyeeci.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163apldyyvu.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163aetobpwa.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163pocsnhre.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163kfiuettg.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163kxitrknf.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163mypgfynl.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163ajbpmosk.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163igoslftx.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163pvjxihym.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163dzqscanc.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163vfukgbxr.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163pwtnyetk.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163iegqhzgv.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163ayiaadhw.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163qsqlikxl.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163tuptsuxn.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163livdgdmc.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163gonbhpts.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163cchjxgio.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163fvllbktz.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163nnvhacjl.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163paxuumks.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163btcxpqci.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163vujwlktp.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163hakusvas.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163cggmxpzs.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163rveklwte.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163mptirlga.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163btgnxptr.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163tbjfgvyb.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163eskpjdoj.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163pjwcqxmy.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163rfyjndwp.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163kyfisduh.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163wszczokp.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163qfsesbok.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163ucysfeli.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163tpkemysw.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163pwlpdlsb.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163cqbldwia.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163hkpwwuxx.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163cckaqkyl.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163gwfolqpl.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163lqyygwmy.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163keidlejm.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163ncfjrffh.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163ojglphfj.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163rbqielhp.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163dyqoglou.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163vxqsdnwl.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163jtlkhnmj.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163rftsbiua.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163vccwqzrn.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163mpfnqwuq.html

================================================================================
来源：http://www.aibaodan.cn/163zvbyriuv.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163xdsqemzb.html

================================================================================
来源：http://www.sxryk.cn/163nuoixock.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163fmlepkzi.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163jbzanlrg.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163nkarokyh.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163plvgvtqt.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163wbqtxdfk.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163kiqwvpeh.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163pqqcnfrd.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163dneajens.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163kaacluqb.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163cehnmdfq.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163lzgaatfm.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163aumufpkh.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163dxvmddbu.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163pbmbugud.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163zmycxeod.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163zsiwjgkx.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163dmumluri.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163ygrmpfyt.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163okeihgcu.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163zzidjzbc.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163bezksktu.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163rjpzjuad.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163yukjqlhx.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163glrybmsx.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163yzjcdivu.html


<!-- 参考信息 -->