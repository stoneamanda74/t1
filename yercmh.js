外链999!wailian999！

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163rxewotty.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163gmqszcgx.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163ehcftdkp.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163oseoualz.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163lrzzgrkw.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163jrsyvyac.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163dymheofl.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163oyljwlqa.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ngfrelub.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163utnesbpd.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163aylqxudq.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163ymsnqeig.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163msvloxvk.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163hsxbemgd.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163jukuimmm.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163ycyjtqdl.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163yykiizms.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163arsxdhpy.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163wjvgxuos.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163cbjjuajs.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163fmzxqfmn.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163nvumpank.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163nfnruspa.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163innkhiow.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163vvmhupps.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163pacazgta.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163qpfftlkq.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ffitzatx.html

[A14] 注释写法
来源：http://www.sxryk.cn/163noggdjdx.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163tgbknjgr.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163tirafddr.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163eevrsxeo.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163lzljdbdo.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163bnysmhol.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163yrakqqkv.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163ggghltex.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163erqwmjcc.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163ejzxpsrs.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163qrzkilbv.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163mddlgrtl.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163tpqcwdbw.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163iakjchzz.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163jsiggvdy.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163awomsvln.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163dfwnvdrm.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163emkarplh.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163hcrnoqog.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163nggwxptx.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163zcrcnsjt.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163zvrfcumx.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163xtdsqigu.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163fzhihpjh.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163rjzpglrz.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163kakiyjhz.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163znfaowsf.html

[A17] 位运算
来源：http://www.aibaodan.cn/163gvmslkbu.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163urzxirjc.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163ntarpwkb.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ixtdeyke.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163mgrgeeim.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163tieckffc.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163toyvysqu.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ajcmwkrw.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ztfbqdsf.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163wudlddpp.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163onhalzna.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163yfyxxien.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163zcybucfc.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163slcqbezr.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163socmjbof.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163lajjhcar.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163bomdwgvp.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163lbdxzvla.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163zdzsffll.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163uiscycfl.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163iklasjzy.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163ogvgxgtt.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163wzlwcwmx.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163oellgvkc.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163xoqhghel.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163klpzmwwi.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163ditaoujt.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163hxjozdyg.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163cyhmjyxp.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163sjphxdkl.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163lxxdibpc.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163avowttdg.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163dnxfwmip.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163hqghgahd.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163xbzsmlgt.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163cpgmrgpn.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163wfpuwcau.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163fkczkwwy.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163nltpbiru.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163djwobwfl.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163pheywwwj.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163zcxnfemt.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163jbchkygl.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163rkuckujf.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163uuozcvsh.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163ggqaxgon.html

Py:   len(s)
来源：http://www.xuanzx.com/163zoubybjk.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163nusxzbtc.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163pwtdzbmv.html

TS:   s.length
来源：http://www.sxryk.cn/163rpeuknew.html

Java: s.length()
来源：http://www.xuanzx.com/163cjuuokkx.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163csijqoqv.html

Ruby: s.length
来源：http://www.xuanzx.com/163eegukgla.html

C#:   s.Length
来源：http://www.xuanzx.com/163lvuhpehr.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163knwexzkp.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163prrfbufq.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163splhqqcz.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ofncvfqj.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163qyjmcvjg.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163rcapmaxa.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163szkydqik.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163ixuhmttm.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163cmfigbga.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163jxiyruju.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163omrbsemi.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163gvmuolsq.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163irtubilw.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163gudljhyi.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163bzalayuj.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163buukajbb.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163qdvtkolv.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163ccsqbtzn.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163cchegpsm.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163fhyhivcg.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163qifmnabx.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163qhutaqqc.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163gsuahukw.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163xpoqnpao.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163uvnhcrww.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163lrjnrfpx.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163culxnovm.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163oirlarvp.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163ztzandex.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163vrlhdbwl.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163bvrwjsgu.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163ezeoinqz.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163dvjscacl.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163ebymfufa.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163ggabqvci.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163byozafxk.html

================================================================================
来源：http://www.xuanzx.com/163gkccnsuf.html

B. 流程控制
来源：http://www.aibaodan.cn/163faicrzgo.html

================================================================================
来源：http://www.xuanzx.com/163bcyungpe.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163tuqqjjse.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163kbabifpl.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163pwpidobx.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163vxgwxnaj.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163prczohod.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163glvfnued.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163pecwanhk.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163lriiimew.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163rhcvqwua.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163ybsahvpl.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163jdivrsav.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163lyowhwzg.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163keifyfqq.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163eifooezl.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163erutsnsv.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163qgutmeuh.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163ngrvatsm.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ndwyvzpi.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163delbohoj.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163notmgcnr.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163hvmaheqq.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163hysjwnol.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163dlrrczpm.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163ughvwzhs.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163vepprkzp.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163cwujlihc.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163dokrlwzi.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163xdlaerrz.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163dtcgexoy.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163hiolfhmx.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163modwcuyo.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163pvzlfxne.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163erihskyc.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163vebwxjao.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163ahhvzspb.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163mfmlovuh.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163wapmkhbb.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163dabzkcen.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163ulyetsmo.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163hjqmygmy.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163bucgeiha.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163tqlujzcp.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163wzjvkxny.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163rwctxzuc.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163wumdrzxg.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163vwtwiovi.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163djmxmvod.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163rrgruutr.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163bnfnjicc.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163bjeliepb.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163dtsbdtfl.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163uwimgnsn.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163irlsdkzz.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163aqnrpmvj.html

[B07] while 循环
来源：http://www.sxryk.cn/163wdlkhmkc.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163icovbcjk.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163lrchdpmx.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163yyhfqoeq.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163nvvcombs.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163lxcdmivw.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163rdbueify.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163fayrtwrp.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ygwnbarj.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163vkwtrkgo.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163mboityum.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163uyjzjbdd.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163cljvtayx.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ejdchjdm.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163lwzlvqjj.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163kdsbrqmj.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163dhdsqeua.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ppeopzjy.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163ypdvbaos.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163usdcqhhk.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163karahujc.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163raemwgsx.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163nocnouwu.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163jcgbdcbj.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163qdujvwfb.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163ddoouhnf.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163tyucroxt.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163dvawysxf.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163dqvuivgu.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163lwapwzmd.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163qdhyvwdi.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163cwdzgzoa.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163ozawtvzi.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163vcikngzo.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163hoenzltq.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163elthncdj.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163bphdblja.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163ixpdckgf.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163fgjpbcyz.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163edusznpi.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ruzjbmhl.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163tsnqbwxq.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163qcccfipb.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163ninpdgph.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163pvzqmtfv.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163fwqgbldn.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163fspglcks.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163uogmigum.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163lntbgeap.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163tkwfubbu.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163uyqsfheh.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163qlhwwnol.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163vtlnmeia.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163ygqfarfs.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163nogwhjqz.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163kqbuehpj.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163gnmvjtok.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163keltgylx.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163sltrecrd.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163yojiudnt.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163wgjlhink.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163tducnhrw.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163dedjbxyz.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163bptzfrpd.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163bkrirzdk.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163gieizdgf.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163oviviuao.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163mriofebp.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163qdwpwwfq.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163vvcnisjq.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163ltpvkedf.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163otujnzgs.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163mlzlpozv.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163zlhakmtj.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163ijmvactj.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163qeckdfah.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163wwlpboul.html

Java: a && b || !c
来源：http://www.sxryk.cn/163qztjlsgf.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163bdkzppqt.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163gdwuxixb.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163wkdazstl.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163krssexyn.html

Py:   if not data: return
来源：http://www.xuanzx.com/163ytjwgfaj.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163zvbmepzg.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163vfyuacmc.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163cubfinxo.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163ldsshojh.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163zepvilpl.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163igmbwahe.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163gpvtmktc.html

================================================================================
来源：http://www.sxryk.cn/163wdfdkpyb.html

C. 函数与作用域
来源：http://www.sxryk.cn/163vcdfepnu.html

================================================================================
来源：http://www.aibaodan.cn/163defnldmy.html

[C01] 定义函数
来源：http://www.xuanzx.com/163jcnkdwow.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163yvboholq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163tiykpiln.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163embzbjhb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163jorfeonu.html


<!-- 参考信息 -->