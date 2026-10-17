外链999!wailian999！

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163vjyuxagk.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163yrgurwvy.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163rfsicrhd.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163wxikbfay.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163froiomjy.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ckvehecj.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163jzikjyci.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163jjgapbwn.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163rjfqhbkr.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163aaypkwpk.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163nflkwtrv.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163nfbrogxb.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163cwsuwuvm.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163jxjbidam.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163ofabraor.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163lmdwkfpi.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163eeyklmeq.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163anqzrzte.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163ofuqydeb.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163vebqslxr.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ywiqname.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163vwgyspaf.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163zldvirdt.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163dmewgxtz.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163mqqskbnd.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163mwdwtiey.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163bmomjtlk.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163hcdkalay.html

[A14] 注释写法
来源：http://www.sxryk.cn/163tmvjddgu.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163domhuftp.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163aurjsmfe.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ipkkgbyy.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163nkeiawjg.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163hhoozvok.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163vsywzuws.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163gpbbwbbk.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163fcfcmbpv.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163bkvewumc.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163wsaubjkj.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163jjaodlju.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163rmhawnys.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163maqjabwf.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163dysyursc.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163jkgzhupw.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163bhowypdq.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163sdpwgnag.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163hindkzgt.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163uitrtjcl.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163hukecfoc.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163yxbrfgdl.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163ajtdedoh.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163onirwmlc.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163gzozohvw.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163qhwpcorw.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163tsqrpxfg.html

[A17] 位运算
来源：http://www.aibaodan.cn/163yulkupxa.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163pulvzzya.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163bnixqshr.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163uqoyqeot.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163xvhnnsgg.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163hjyjjrnk.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163axwbkvjl.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163sxitnnki.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163kvvesmkp.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163lndsekdx.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163dwlcckpf.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163xgyilizk.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163jggedvsh.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163szjluffr.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163tkzkegpb.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163iycvykim.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163edazoaau.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163aujfhvxt.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163mqtzqoqq.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163zkzqsmul.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163xsielqzi.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163yujmsyfs.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163gznghmxz.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163jzwjndjk.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163qrfeupaa.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163vkatdrfa.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163cvzfddhi.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163jcpkhmuo.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163ahxxpdag.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163tbturjrx.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163ooqzvaiw.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163xmhzhkaa.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163yjhbuaxl.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163xhzdcnih.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163obvxxjef.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163wbgobehw.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163hnyhtsil.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163rbjuebkw.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163atieahoh.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163oziuilzf.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163uuqbpmvf.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163catxdzft.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163hcukbzbp.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163qcenzwkb.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163gthoietd.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163nvejurrp.html

Py:   len(s)
来源：http://www.xuanzx.com/163gpyvbrmz.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163yiizwqyg.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163oqhvakqw.html

TS:   s.length
来源：http://www.aibaodan.cn/163ullyjmfc.html

Java: s.length()
来源：http://www.xuanzx.com/163lglswmvt.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163bthpobmn.html

Ruby: s.length
来源：http://www.aibaodan.cn/163emsgyokh.html

C#:   s.Length
来源：http://www.xuanzx.com/163hxuzcoyu.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163elmdjcwy.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163cnzcrkmc.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163iwrtgivj.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163awkbpgkl.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163buvdxnyt.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163taufvdni.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163girnojfk.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163eduyznrs.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163wvuoklev.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163eypelnoh.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163okncdums.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163puuckfdt.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163lvrmuslx.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163dfnzykse.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163hwljnust.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163tkktogfq.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163fpqkwtcu.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163sewerucc.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163cexmhosc.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163lfobsamy.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163xdzhoggf.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163tjoazbjl.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163ndqwadud.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163buxzlkpi.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163xucjvnqi.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163yxgsgang.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163zpsakgmp.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163avyytitp.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163tmlvtquh.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163zlbfsgzp.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163aqttvwyq.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163xetmnrun.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163cuswqqtf.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163pgrnthzf.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163tbshwnyc.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163lemamgqb.html

================================================================================
来源：http://www.sxryk.cn/163wklcdymm.html

B. 流程控制
来源：http://www.xuanzx.com/163kzfvmpbl.html

================================================================================
来源：http://www.aibaodan.cn/163uaoksiuk.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163rvrehcqm.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163cxkcmbqk.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163onnhfthh.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163mrzjwrvs.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163kncmaoih.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163fxghkynq.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163jffxxghe.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163pdjmndhq.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163gjyobrpd.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163xnhqoicu.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163cpgpkevj.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163anlsmtuv.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163brvvzhsg.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163djktwfvg.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ocgpjfgy.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163xeinngvt.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163lejogbpx.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163mzsukkwx.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163dvjxdcqh.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163vtlsizgh.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163snuzfvnh.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163uulylkzb.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163xkouicoq.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163uatdxviw.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163izdoxqcc.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163uvqndbga.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163qkyzepoa.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163niddxwud.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163ubuthjgd.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163xfutvvqy.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163cioxfoyq.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163lrkhqjbm.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163wcumoqzm.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163vboqwsvi.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163axhbhant.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163fowxikvc.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163pgaytqyu.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163nvwblxnl.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163lpfwvbsf.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163vnllxhjr.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163slpuhlzh.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163rnufyubh.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163psyirwoo.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163rsxkrwht.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163ycpalxvn.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163qxlqwlab.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163jmfhlepd.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163ecbgpwwn.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163vvwynjxy.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163chjantgg.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163mszsapne.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163rmxsrtll.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163rxmutnes.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163dnjslizp.html

[B07] while 循环
来源：http://www.xuanzx.com/163exxpokox.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163hulfxwfj.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163ndbdhofu.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ncfhgvml.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163tenhccbe.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163pwipxzca.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163ruhzjipa.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163yrgzyiug.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163fejyqjql.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163yynqpwaq.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163vaporvbf.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163vecadvzy.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163fptydcmb.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ruppdybl.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163tvdlqadb.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163prdpthuf.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163bjcyzaox.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163lshxcvrf.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163jvamfavt.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163nanvswko.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163blbheahx.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163whnlvwug.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163uxzwercg.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163hlqbcqca.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163khnsjczg.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163gflnhkpb.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163yxoijrol.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163nrrjrudq.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163qbxftqbp.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163oumlskya.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163fblihwqk.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163ptpwawms.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163myaxcrpx.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163vhiwfijf.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163jpvxkbog.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163xlwevzqr.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163bqbxtndw.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163sxnedsln.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163vzuslrat.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163hqumajue.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163takqmyvc.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163sdgsskuf.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163eknnxvdb.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163cyecamor.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163cgcvsjqp.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163vjnkdsro.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163kgevcesu.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163jluxyddw.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163wflliwwr.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163yufezgvi.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163eldatzss.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163sgbpzepm.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163psfrqhwj.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163wtkxjrch.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163stsepiug.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163bhrvdrwh.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163kzwtvyxo.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163pimywdaw.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163cfpqlrwq.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163cnbvbjbq.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163bgmzxziz.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163ccxlfbgt.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163dqwbrpyc.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163plpnluzy.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163nkzbinxs.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163ptgcaozz.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163gvesxynd.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163osaragse.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163ngploeoh.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163janngntm.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163wihbgwuw.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163hzfyhwdm.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163mabqgoeq.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163tghqmlls.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163odmerfdj.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163nvrpsebt.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163fjcating.html

Java: a && b || !c
来源：http://www.xuanzx.com/163mmqjruly.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163horseeyn.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163cotpudwa.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163ucyddelx.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163lfdfcrnm.html

Py:   if not data: return
来源：http://www.sxryk.cn/163pywjuwfd.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163vdzocjcw.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163bhhqrckd.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163bdcnkbkq.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163zeescvqc.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163jwsrbmuo.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163ylmcnowl.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163wfcuhccx.html

================================================================================
来源：http://www.aibaodan.cn/163nklnkhvd.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163weoaswxb.html

================================================================================
来源：http://www.aibaodan.cn/163keolelqr.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163tkpfshzj.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163bibzlxrv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163huxrebzo.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163fgyvzfji.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ajweifqg.html


<!-- 参考信息 -->