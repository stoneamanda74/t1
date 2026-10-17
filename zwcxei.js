外链999!wailian999！

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163mnpnubeg.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163drqjydma.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163jozjmbyj.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163oipgubxe.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163hmbxmipf.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163jxugycyv.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163nixkhojc.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163wyeewqma.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163yplsthhf.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163ujjstpxk.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163dkcmexto.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163lotdadvk.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163goutaeyz.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163hfhdeifu.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163qbbjuptv.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163wmdgdkkp.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163cpchqfgn.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163zggmksqa.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163wxczneks.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163duybcfxp.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163euqhapbk.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163gfucczcc.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163znaxiigi.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163etguovzo.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163mcjlsysm.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163gidsorgj.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163jylpclwy.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163rqijmaau.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163yixpxcnt.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163khyshfdg.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ygwikhtr.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163apkgwnqy.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163brpbktfx.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163tpbqgrzh.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163yhcbrzdv.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163glmmspxf.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163fsvcivai.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163pvusnwkv.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163qxmjigak.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163rcrhimez.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163ancfvvyp.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163ashrtmzd.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163tlkpavsj.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163uhgqfufg.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163xeugrqip.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163nqebzwur.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163ffsewkfx.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163nkdcvfki.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163gswadwvi.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163kmudcnft.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163lkazqind.html

[A17] 位运算
来源：http://www.sxryk.cn/163sritwqlq.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163rkxccdnl.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163odarjyqa.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163zhiplvje.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ovqcscny.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163qvnbszdy.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163tvnyiyvm.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163qeiauubi.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163wopeycun.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163pifsznlp.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163mocndpwa.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163vklelloh.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163rkpmvbyx.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163hcevsrpg.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163vaunvoxf.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163edhsrijt.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163izmlcdcs.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163jswyyjfo.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163eclfbxxl.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163pzwmttdc.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163pasfsfzw.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163oqghpjah.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163bwwftunn.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163xihpfzsd.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163rwkfifyr.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163oqnlqkjc.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163bhqaxssd.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163nojsakgm.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163cgtapvcr.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163zewaapdq.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163ffxqklzo.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163mfsdhcgi.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163ltitxvqd.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163pxjlxbth.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163xwieeizk.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163hkxagevp.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163sjcvrugz.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163retoihul.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163hctbuulz.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163fttshqfd.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163bgvtfcmw.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163hdvcczcd.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163oxudoxcc.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163iopihzzr.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163unkmtbcg.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163xqgkzkwm.html

Py:   len(s)
来源：http://www.xuanzx.com/163wqvvreii.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163azrodxzm.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163pdrqnsnw.html

TS:   s.length
来源：http://www.xuanzx.com/163ssibngas.html

Java: s.length()
来源：http://www.xuanzx.com/163ilqbpozd.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163wuhgczva.html

Ruby: s.length
来源：http://www.xuanzx.com/163qckjbdmi.html

C#:   s.Length
来源：http://www.aibaodan.cn/163uxwrkhve.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163nqbxiutv.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163yzmnnflq.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163lpmihqgm.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163tjsrnsll.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163wsblealz.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163qdlrfrqs.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163tdyvxpyp.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163cwnzwhmv.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163whlbtour.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163esibglmp.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163wccltkix.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163btjydlxb.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163bahhzyru.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163xlwrqcuv.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163kderlkmm.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163secwialr.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163cpxeqvca.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163pbmlymem.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163xexpworc.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163zmpbrihe.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163svysscfb.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163rqoayicm.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163cguklbxq.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163wpxishem.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163zvwvsgac.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163svminlsh.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163ttujhijt.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163jlvqybmg.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163fgmwittv.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163tayekrfq.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163yhbmwktz.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163zmdhfoks.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163bqmafvye.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163nqtkzqwe.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163chcxvero.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163jfhcmnjk.html

================================================================================
来源：http://www.sxryk.cn/163clwdiexq.html

B. 流程控制
来源：http://www.xuanzx.com/163wcrvvack.html

================================================================================
来源：http://www.aibaodan.cn/163nafraxhz.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163bdzqsnsj.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163fuwyyqnp.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163ryhmudhb.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163vdgosnaw.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163yvuaagqj.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163gtrokohi.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163qypvoqhi.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163rzhzvqef.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163efeglbhq.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163xqrmjazh.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163uazftjoo.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163igtuxlyg.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163aezdeumx.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163hmwkjbvw.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163hxekedou.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163aftfqmxh.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163njrhcllm.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163oahkuhrd.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163ycxqbapx.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163qbkvqyhq.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163fkdidnbg.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163sjvtuvir.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ttfuickw.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163vhvajczb.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163dbpdwria.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163qujestdw.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163rejtxmem.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163besiqjrl.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163ggkzghvy.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163lprfvplx.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163cgebuxuq.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163fupouuey.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163exvvhtaw.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163wreqtngw.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163vgrasrpg.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163ymkbwvle.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163mptusobj.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163quwykqje.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163kpagirhn.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163oxuuqrsp.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ciawlxoj.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163xovpmygt.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163dqsvjanr.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163cjgfxbiy.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163wernzdrr.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163iurifqsr.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163litlhrvc.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163nokvkaef.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ayouwttw.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163aktinwxw.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163xmhjbvjw.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163ifqbhbuf.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163wuzmdien.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163slvkthyc.html

[B07] while 循环
来源：http://www.aibaodan.cn/163idthrzwp.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163thpbhuqn.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163icvzyruj.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163qreforlc.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jtqkvamv.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163lhmcgafq.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163unmaoyqt.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163tbughhqm.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163gjmgqzyl.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163wpydhnay.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163zfuosxcs.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163wdlkniqq.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163quabydfw.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163jbaczhqm.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163eptrnswe.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163dzleljpy.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163rvuxumil.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ouwsjwhx.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163tijzzvgy.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163iisbeosx.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163rgjdxvgj.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163gbgcjrhg.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163sqqqkbrq.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163wiidfncy.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163yrjojuwg.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163tnvgbzxl.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163bbuedwlq.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163zcfzohvr.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163oehuvvhz.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163yepkjoff.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163nzekyaqg.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163rmblymkm.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163bmanfsdq.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163gfazxsnm.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163fsmuwspi.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163zsiaqbrx.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163pbdfmxrh.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163hzzyijki.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163eprsonan.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163czhaotme.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163nhlqyqyb.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163idfubfrn.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163podbecwi.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163jrxmejbe.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163mbowuhtn.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163kvnybwgt.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163nxaelpvm.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163ojblwofq.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ivinttig.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163dzzzgzyk.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163gphceisb.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163igpdmzsf.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163lrzuyrcz.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163wztzbckw.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163kvzplxgh.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163lwsgbcoo.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163gehjkbut.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163sefcquxu.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163pmzzeukm.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163bqbrhqlh.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163miuchtir.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163ooltaeen.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163riozaufh.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163gbhivxfk.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163hiphoolb.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163vikyfxdm.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163bgenagxu.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163wbakdmmg.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163guyuroaf.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163xtkveswo.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163ngmtmylr.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163ziwmaejj.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163wirfgcub.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163mcsgvpoz.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163qqzicvaw.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163tzizepio.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163tqtjwele.html

Java: a && b || !c
来源：http://www.sxryk.cn/163jsipzqxj.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163qmnolbkw.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163nfdgtezr.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163rwjnqcoe.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163awjpwzbh.html

Py:   if not data: return
来源：http://www.sxryk.cn/163hohjlvxy.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163sgkyjyor.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163cldciyud.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163fonemitx.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163jgvacqps.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163anqdbpsu.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163zjqsmyvj.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163hnaqkweg.html

================================================================================
来源：http://www.aibaodan.cn/163rfxyjlyp.html

C. 函数与作用域
来源：http://www.xuanzx.com/163xbtfgvvq.html

================================================================================
来源：http://www.aibaodan.cn/163wxggcccb.html

[C01] 定义函数
来源：http://www.xuanzx.com/163wjeqnmpo.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163rrbvbuox.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163laaajmar.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163bslqqqqj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163qwaaztup.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163yewtiwiw.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163mgeymnch.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163cylapfmb.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163pktlzfzb.html


<!-- 参考信息 -->