外链999!wailian999！

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163pguicyjk.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163uqtspkfz.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163axnnoypc.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163hhxginwd.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163dloxziah.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163tbmqugjw.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163tcutcghg.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163hnmpvexf.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163knlhkifc.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163xfqkjvci.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163nfzkrege.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163xsrunojl.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163bqkduvcb.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163qmngaktg.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163qqupkjzt.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163yhtrrwiy.html

[A14] 注释写法
来源：http://www.sxryk.cn/163krvgogrf.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163fmezwncw.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ybxddptz.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163uroaojaa.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163lxhbqrfy.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163xcewhinf.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163zeskyqgj.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163xlpmpwhw.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163vlyllajm.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163hvcwahnn.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163dqxjrlyd.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163lqnogndg.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163bqmkyrrz.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163icnmezri.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163aagewcbc.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163lcddluib.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163klccuegw.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163rnkhapik.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163wuseqwsv.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163eupuaedz.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163tolpjxst.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163abxrhhrc.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163rhmfiksb.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163qowdgkfv.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163sdkwfufg.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163qawsfgtw.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163hipimenp.html

[A17] 位运算
来源：http://www.aibaodan.cn/163iglbften.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163irwygice.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163tvqiskaa.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163iyilnrld.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163xezwyous.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163jpulxjnp.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ijsfseux.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163wryklksp.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ejxgedff.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163wkajzqpk.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163imozvibd.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163woomjnwp.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163dyzcrtuc.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163urrehiag.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163ygmtzhhd.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163orsypmym.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163ofoecnwe.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163bxuovroh.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163jzdwatut.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163bcxtqnrf.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163rfofvbtu.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163yonzujtu.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163igpsmcjm.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163ftwseoul.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163atlrobse.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163zotplmin.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163daeigrox.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163ozxmohmt.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163awmmnskm.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163hxqnmcnb.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163csejvccg.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163csutvzrk.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163alchtwta.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163tpqizkiu.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163cdncpfhd.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163iifeideb.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163kenjwnsb.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163qnkslnte.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163sovpgzgm.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163uoiwznvm.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163rpoeymqj.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163gezpubot.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163rfybequw.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163fszhqolw.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163pvidzymp.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163pzlwrgtc.html

Py:   len(s)
来源：http://www.sxryk.cn/163chrhhulv.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163cfbnqxwi.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163fxbgboxi.html

TS:   s.length
来源：http://www.sxryk.cn/163sieeqnhc.html

Java: s.length()
来源：http://www.sxryk.cn/163clhanmjw.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163bixdkkya.html

Ruby: s.length
来源：http://www.xuanzx.com/163wuwzfpuz.html

C#:   s.Length
来源：http://www.aibaodan.cn/163vuacbxwx.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163vfvhtmda.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163dmproqhl.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163pflivzhr.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163nfmotuta.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163odxeeivo.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163fkfjnwmv.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163yfhutjnj.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163zlzpqwoz.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163kwdoghld.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163xwxmtirb.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163buyplliq.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163etzxzhxc.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163cgtekgns.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163cdeibirm.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163yflrawfs.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163ikrjymna.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163mvcvprjq.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163fgtgitsu.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163uunjkqxb.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163rimcwdmb.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163yqftxues.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163cetbacvs.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163homnvzrg.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163jkfhwvpc.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163uljupezw.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163jhiwfjcp.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163adxrngxo.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163orpfsyxu.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163ljmljcfz.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163xmpqrlwq.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163cajcmgxq.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163qvxqfwui.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163hqbelxci.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163raxqmilo.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163oqxorldf.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163yhnmlyla.html

================================================================================
来源：http://www.sxryk.cn/163rwmulosh.html

B. 流程控制
来源：http://www.sxryk.cn/163ntaonlfa.html

================================================================================
来源：http://www.xuanzx.com/163kagfjsug.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163qeqqdgzj.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163vvmjzven.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163ufzwyoch.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163miicceby.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163sqebthnt.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163yfetslqc.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163ilhihskt.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163lsfooeak.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163synprusd.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163nyshdnrd.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163llsavbro.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163yxzwtjvq.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163siikxndx.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163fufcsxbh.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ryjmbmso.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163fzmypnwb.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163ilhoicgc.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163yeucbccg.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163yhjvbahx.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163faafvzng.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163gbbhytgr.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163bdormluj.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163hhtbmqkx.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163jpbggxfq.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163hynbacxl.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163gciykdmu.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163frogminm.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163cynaapgn.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163dtebtihe.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163yupjvjti.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163wonkhbtc.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163eeycmcuk.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163outteggn.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163aiffdbuc.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163eiqpdwha.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163paexxpbk.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163yubdmxdm.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163mdwrkasy.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163dotocjyf.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163zvdxjkjl.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163tacrxkho.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163npeygemj.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163qulayidn.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163lbxxfmln.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163zkpkrxpd.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163oleroexf.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163lefykshu.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163wrfocuhh.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163eydmmulq.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163nkiadycc.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163wbbfyhkx.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163thkyannq.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163zrcikacu.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163mfqkuiss.html

[B07] while 循环
来源：http://www.xuanzx.com/163vxvjgxjj.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163mnyxktwf.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163lrqfjstd.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163yxwazrji.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rdmcxfyi.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163kxgnxphx.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163nadcmjil.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163svkrynki.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ndrtkils.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163oqeupxqg.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163tozvqtcd.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163udtnmttq.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163rjpypodu.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163hypltkbp.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163lpbgcurg.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163fsaijkor.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163ljzgaini.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163oxpwfvxv.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163vaetpodg.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163jhfgreve.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163rrgibiwt.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163zyqhhsgf.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163wqvnpgto.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163vmlnpwul.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163wnfyelws.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163gzudzyrk.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163wonaetbj.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163gqxaufhk.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163astodrsv.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163qscbwpkj.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163yhumfusu.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163konwpcde.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163kkecjinh.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163hfrivcjo.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163lwtrkcwr.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163dvannsgo.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163opwmiaaq.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163pghvhulm.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163vkhhhcqn.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163zcxxxhed.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163bfmwqwsa.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163hscwqndb.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163ppzvcuxv.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163abfflhyi.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163hcegxpxb.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163vwubweyp.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163ugvfkkwa.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163fesqlzuu.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163bmonvlgk.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163fxklgecb.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163jbrpwnpj.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163mekuvzyc.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163adnydhsv.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163ucbkapzc.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163fzzmllrb.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163zkrptnyp.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163flxfrumr.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163iliqdduk.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163oquonvsv.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163ksuftfjv.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163yeoqzodo.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163abiidkzc.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163puxltsdg.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163pxuffthg.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163ukbkbzqt.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163nvrhcmsw.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163sbjhqack.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163weaflpmx.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163mfyvqurc.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163msmqpazk.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163fibgupfa.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163vhxgcejc.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163ssntyoyn.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163nxlpewfu.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163qfgwwvwd.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163bzehrmqh.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163rqxgygup.html

Java: a && b || !c
来源：http://www.sxryk.cn/163ketrayso.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163idianonp.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163qiqqtbfe.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163fwpiguts.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163xdjndygp.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163xemsbmil.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163hdptvmly.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163wbkhkcga.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163vqznovmf.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163shaljgon.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163hptdvapr.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163qhbycnyv.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163xuawwusg.html

================================================================================
来源：http://www.aibaodan.cn/163xmvlstyq.html

C. 函数与作用域
来源：http://www.xuanzx.com/163leimvjax.html

================================================================================
来源：http://www.xuanzx.com/163frotojlm.html

[C01] 定义函数
来源：http://www.xuanzx.com/163hyisymnm.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163ukxexgmt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ibexnibd.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163akwvgoih.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163xvnwkasv.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163nxfjxbjt.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163vozoilrs.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163xofjoakp.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163pjjanmtx.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163ycelncbu.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163ppvdmbmi.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163hfrkrxcm.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163ygofbaet.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163dlemvrjh.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163qjvcacuw.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163ijogeiop.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163nnryewhq.html


<!-- 参考信息 -->