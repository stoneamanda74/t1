外链999!wailian999！

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163pxgrmcha.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163gbsctiuh.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163mfdpunmq.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163siirxkvc.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163wkbermuj.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163apscrewd.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163qqroffmg.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163sqfakhqz.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163jyhshtxq.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163oyggmwmb.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163wgyslteo.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163sauuirhp.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163yajchjwb.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163lgbounpz.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163gzbmizzh.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163ehtjjoju.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163edzwtlgg.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163ftdbuyyk.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163jpljjbso.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163ndwwwpfh.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163cydsyjud.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163jvtkkqeg.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163iwpgvash.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163whiighxp.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163eccpttoc.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163wrlapszc.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163eabiwdra.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163daipvmno.html

[A14] 注释写法
来源：http://www.xuanzx.com/163ltkfubdy.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163kryxjdco.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163mzlwdppf.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163ewfbipzr.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163hbkqdlph.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163aszbpxhh.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163lwigmfqb.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163hywucqrq.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163mnmyjxez.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163powmhukm.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163jzccwdbb.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163vcuygpiu.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163krocodxt.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163drtpqagv.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163uonnquxu.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163iiyjsamh.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163halwvnxf.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163bpuixgdc.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163dtbqjxvo.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163gwpdjobs.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163ioecwmwk.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163rpsbiyzf.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163nabrwsdi.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163ojbkzuoj.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163onvxdwdg.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163mbgicmmz.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163nfhimmqr.html

[A17] 位运算
来源：http://www.aibaodan.cn/163tfpbsezc.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163pbeuwxqm.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163yhsoyhsi.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163irhuqchh.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163gihkggjh.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163mcizhuam.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163stgpwrtl.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163vkgimvvk.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163eunxbjle.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163wzgjscvq.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163georqhra.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163tlwkygdj.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163zzgnvkaf.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163ohysirwu.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163hrusrbpj.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163oeozixac.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163gfjlszkq.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163ixerlhuc.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163lgcqpunj.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163ybtqgmcv.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163lhtbvcjs.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163epudwqgd.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163rljegajx.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163uejtabft.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163dyaslxzc.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163tzasrbdq.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163smmwkzdo.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163uzafszos.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163cuihxnbj.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163rbtxthcq.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163jmyomxyk.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163zmmsqrks.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163xknzhvjr.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163kxskuyau.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163cajcecbm.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163bnjbgxxy.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163hjmhxdbd.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163wwudgrvm.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163vwvkfsqc.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163clukkgpn.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163bwhhapjj.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163gmlxutwf.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163sjtlntuc.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163nmagpcgy.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163gclcqfmz.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163wkkpdbym.html

Py:   len(s)
来源：http://www.aibaodan.cn/163bcmgrscx.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163jrkwvypt.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163icleolwp.html

TS:   s.length
来源：http://www.xuanzx.com/163sleqzkdh.html

Java: s.length()
来源：http://www.aibaodan.cn/163objhzzor.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163knvnxxsk.html

Ruby: s.length
来源：http://www.sxryk.cn/163qdkzhiia.html

C#:   s.Length
来源：http://www.xuanzx.com/163tenpguua.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163afzhpqez.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163tygrzzba.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163eulwtfhy.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163zcpzebjs.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163eqjkavmv.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163vidbhcuk.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163fjuuurbt.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163kllccmjk.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163yjgdwtaj.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163nkbdjrvi.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163bzuatuva.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163sszzbgqt.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163mtiuznqp.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163qqctixjo.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163hgfecrhl.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163xbyzflqr.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163pzfszhcx.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163bojkwdan.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163fuvacayu.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163ydxtnbkv.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163ubrjppwp.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163ckixddep.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163aygofffd.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163jfgexjqm.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ivfbzccg.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163zamyioyh.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163cyhtybjo.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163dwggsqst.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163tbtjtncs.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163jflvmdym.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163yvaiqhxs.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163dzetqtwx.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163akknktfr.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163yqdxqjxn.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163gdodilxw.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163gvihjtoq.html

================================================================================
来源：http://www.aibaodan.cn/163lupdxzvs.html

B. 流程控制
来源：http://www.sxryk.cn/163cncksdna.html

================================================================================
来源：http://www.sxryk.cn/163scnccgiw.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163yrzodbwo.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163blbtxyug.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163razisonf.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163jkglkkle.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163zwdaxbtw.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163uhpkusma.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163ygoqyayt.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163zztfaoug.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163prnescsy.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163kifsrfdc.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163gcdiocuj.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163xhpnholr.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163qyixgbwo.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163fdrouuos.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163dkyxzwtq.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163dfaakrey.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163wgqsqhwp.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163dmqexovs.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163fpupbwss.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163eknkakgi.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163zdvcirxg.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163gbeeulry.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163acyxirlg.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163jssjkuro.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163gjbumimc.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163tjxtqbsp.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163metrorib.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163birhfrhl.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163bwqflalm.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163ytlsrklg.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163sdrvjiba.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163igqbqifx.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163akbloefg.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163icqklbci.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163pmvypvnq.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163cjmlfllm.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163ashlrsga.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163avouwkfo.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163lvpzrzvz.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ifctwzhk.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163flzujzom.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163saswchay.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163nuhkdsvv.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163ejoprxnd.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163jpyuheic.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163egndzdnp.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163ccflvgzd.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163tayvlggn.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163nqxpfbxo.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163evdlmytq.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163jegnsouv.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163pcdtedvf.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163abrywuea.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163apqsnkbt.html

[B07] while 循环
来源：http://www.aibaodan.cn/163mtgwpktk.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163gnltthrr.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163nkaqyjpm.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163pfkkpbzc.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163njxdrqcv.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163oyyryqho.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163lfxqhcho.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163puyfppmz.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163tmqbglqo.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163caxfjjaq.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163rcqhxfzk.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163pwdgljhj.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ftwshrrs.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163efnaphxg.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163vngpiebb.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163ucdzepfx.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163eykqshwm.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ychzswjj.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163roiiexky.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163cnjjhtws.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163ayelhxpe.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163xtgfczei.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163jhnvppqx.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163esgyipox.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163gftxawdf.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163zrwsnhmj.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163guztztkc.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163zujgwhym.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163mrfyyhgj.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163abqvsyrk.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163jrtuczsl.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163eiiehapx.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163lldbgofb.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163lcwituvp.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163yaqanzni.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163urudypvk.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163eyrgohzr.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163caaocpku.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163szvcyxre.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ogborueo.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163pmceevtx.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163fyslpcgy.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163ijksjaga.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163xwypoofj.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163fnqlouib.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163ecjygsof.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163iiwlqlvs.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163mlfuaczy.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163senvmozh.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163cvyxdyeq.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163hutihjzj.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163sxytypky.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163fkyxjwwo.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163gkpduuit.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163aownussf.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163kzscovcc.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163luktvmhh.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163brymqswd.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163uxdenzdx.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163leoactbi.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163pcfrgydr.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163wivjlqaq.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163qfimsbih.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163ateulfto.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163mrbluxce.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163ezvdhkki.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163dazynxme.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ywxqjtxd.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163nblaunhu.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163essytjoq.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163avtvglkx.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163abyppxsh.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163bzrpiduj.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163jwesxozz.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163rnykyfzc.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163vfspbzhn.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163tvatctfm.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163piactipl.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163ufqwuglp.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163oawzydtv.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163hbeyydhg.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163qbbmpvab.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163yzdequco.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163zjvyoptk.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163hluedzll.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163exzxidie.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163kxoqdflu.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163ozzrzmxg.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163rkzpepqz.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163dmdplljz.html

================================================================================
来源：http://www.xuanzx.com/163dkedupfh.html

C. 函数与作用域
来源：http://www.sxryk.cn/163qxvyxlhv.html

================================================================================
来源：http://www.xuanzx.com/163svhbqkwe.html

[C01] 定义函数
来源：http://www.xuanzx.com/163grjtckoe.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163dzimpiao.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163npembvdi.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163jmfgqjpg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163lvjccpmu.html


<!-- 参考信息 -->