外链999!wailian999！

[A10] 生成随机数
来源：http://www.sxryk.cn/163wkpqkrzo.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163zljxmayw.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163fuekhivh.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163trqiplvi.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163fgwmzxdg.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163fdgtzzcd.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163oshzcwyq.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163srsunqck.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163lgltuknh.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163yieckvrr.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163witscrrb.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163licgkxlp.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163vztwphrf.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163cgufkele.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163tvnuhltx.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163twzfcksw.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ndreaowu.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163rswexcji.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163mzcpmfsk.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163dwctitla.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163thbknxin.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163hbirurnu.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163pofnpcrv.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163gadrlurh.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163arrjtovy.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163dhdqkvsn.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163xmvrrhea.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163smgnooeo.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163zwjzlwkp.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163rotgplqj.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163zqmjxzbj.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163kvfbnfzi.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163laxexslz.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163fcplmtiw.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163netrfqov.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163kpjrgepi.html

[A14] 注释写法
来源：http://www.sxryk.cn/163jwhghzbn.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163enavxbmd.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163aqorcrfq.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163qxtzkkhn.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163zrxeaigo.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163wqlabezp.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163vczbesoa.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163uwqhowvp.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163hrneqeoo.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163eysupmdr.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163xipvofsq.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163uhyitdjr.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163aboltzyc.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163bxzqbyml.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163jxwbuwye.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163qbtbzszs.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163lbmqrlek.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163byhseypq.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163oyevnkdy.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163spfsgdvz.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163xwweaept.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163xqdzudyq.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163gcyiewke.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163aonqxphq.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163licywqxs.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163dwxpwcng.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163epslojxi.html

[A17] 位运算
来源：http://www.sxryk.cn/163hhryjemv.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163minfsxsm.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163idxmccbc.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163dwqgjxwy.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163ktpyfmek.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ynxlsast.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163lwaldiqt.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163bssynctz.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163gzxevcch.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163aijcxyfo.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163qkpvpztb.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163etfzycxr.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163ppgmuvtd.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163rzwhipdn.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163wmtypqpm.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163qgpnorpq.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163jihhnpbl.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163dsdfanjh.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163upwcrhtn.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163zayglvaw.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163lzktkbtt.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163oivryddp.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163jstffins.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163zhqkqtth.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163frjgssxy.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163iqzcnhxt.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163qufejmxa.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163ducizecf.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163kmlrqado.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163tdfnvpwc.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163ouiyplro.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163mypbcctt.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163dwlrayux.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163olachqpy.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163nvbdlehl.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163ujjlgzqj.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163eieqptwh.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163nefrvhvb.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163zejnxrju.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163qskdjsvu.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163vrfljegf.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163xfgnrmds.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163yhlijwgy.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163jtwsrypp.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163vgrglmhi.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163iniqbxau.html

Py:   len(s)
来源：http://www.aibaodan.cn/163nvwebieb.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163yiehoasa.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163jtiqcijh.html

TS:   s.length
来源：http://www.aibaodan.cn/163lmbvwbcr.html

Java: s.length()
来源：http://www.sxryk.cn/163pqtbqpmw.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163gjhhbxwn.html

Ruby: s.length
来源：http://www.sxryk.cn/163wqytxjll.html

C#:   s.Length
来源：http://www.aibaodan.cn/163imkkuieo.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163ytqynmbl.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163slkmyhjm.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163ryzwdcbx.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163phdnbuqi.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163mdyshejy.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163aepxydhd.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163armbqleq.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163jzxfbhdx.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163gjtpfzew.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163xoutcocz.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163omvuauxy.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163oxrsicnx.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163sxeovjrk.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163elhjnnqp.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163isteaxow.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163zduzdepl.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163odowgfwt.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163htnwalhi.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163dvujdnbq.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163pkxswoxj.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163icwnsclb.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163eqfhdfun.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163titujqvc.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163hvqlogup.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163ycbsvbhy.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163wouhxivp.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ptpuzbmp.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163norbhuvj.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163udabomuf.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163lvlrftau.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163fbzxuhvj.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163gjmvccmp.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163cjymzmve.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163qkxwqfcs.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163meweirqm.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163hybtnlos.html

================================================================================
来源：http://www.sxryk.cn/163mleyzzux.html

B. 流程控制
来源：http://www.aibaodan.cn/163osntwsij.html

================================================================================
来源：http://www.sxryk.cn/163hibesylb.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163byobkypn.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163fgeplqtf.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163vxathlhb.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163seqdruaq.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163luularuo.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163bwitqygh.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163fgzkadlq.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163vnhcomzc.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163avzozsyx.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163niulvpmr.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163otyzyeme.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163xmgbfque.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163dogvrtvb.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163gfszzeiw.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163jpucybel.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163myqpfhjv.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163egwtoiah.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163euemcjog.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163ukspcahe.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163yswjvvsw.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163lpocwqrn.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163rpslqddb.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163nqwopvmc.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163aywcxyex.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163rkmiszyh.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163fzyhukdo.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163jhpewjon.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163mksmzmas.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163zqcueron.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163fvfmlzqs.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163jprijljr.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163qbghwjye.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163zfvdgrfi.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163hzeozxps.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163jmcghxpf.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163sxojbydc.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163nsmciaml.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163jkhtlbfb.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163ngkphpkf.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163nwklkldw.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163yoghbbkx.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163gvfwcrmj.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163zmqyclgr.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163iusupdbw.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163hmarthpo.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163qjgtliug.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163nemyibfb.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163fcyoivau.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163tbkkeatz.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163xcbyvuhe.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163qosntsjq.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163wutkybyz.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163hsefzrsu.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163niemoulo.html

[B07] while 循环
来源：http://www.xuanzx.com/163srxrqljy.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163zdriywdt.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163lqgmxoux.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163nrgvkghc.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rhgznzba.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163fuymrtws.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163ypidrlhg.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163qhckvsbd.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163mkxqokze.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163fajhfgcd.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163avnctuqx.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163ussvlgtl.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163gncfjhnx.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163kmfvxlxc.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163sfkeblye.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163gqrfrkrc.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163ebwnputz.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163fpndnppi.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163yekuvnkf.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163nblzitxe.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163vuprtoox.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wgxztdlg.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163xpmrlhjj.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163wckbmhkj.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163vchvyscz.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163vbbnhsuf.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ofqnxaaa.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163dxfbnltd.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163jlguxsph.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163ukclibjp.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163ykvbbawv.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163qyovwslc.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163mtfjalrw.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163vvcwinyo.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163noweynao.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163bfrtkrgi.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163xehvqpim.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163wheqtzky.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163cmzblgnh.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163wcidkpyt.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163nitfgihi.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163etjuoyur.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163yhqiktjg.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163lrdxafhg.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163brtzuiuw.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163bgmydovv.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163fpazcfzd.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163pagggvpc.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163typhuqsp.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163wsyhgcau.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163kmtksacz.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163xljotffa.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163unokfdmv.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163qornxgfu.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163kqurkeey.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163rbepqpke.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163trmyhhvz.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163gyqerbuj.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163hcecjkyd.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163xdxsmfzo.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163qlqidqep.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163hmobvvhd.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163ddkjuumf.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163sqklohyf.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163tsnjuuex.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163xebvssca.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ocuteqyv.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163vpiljsrm.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163zwumghxa.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163kvcfsbdg.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163jmeaaaui.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163btgxcrmq.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163fiicclbo.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163mfxwawif.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163dcgaingn.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163njfydals.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163nrhvuuzc.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163pakpgyuw.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163hejtpvge.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163jgfeqkzf.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163yhxntlqp.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163sncfyywt.html

Py:   if not data: return
来源：http://www.xuanzx.com/163gdrueacd.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163azwulxkm.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163skudxgqa.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163zwcnsljr.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163bjylmyft.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163cllpdcpg.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163iiihntfe.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163iethuadw.html


<!-- 参考信息 -->