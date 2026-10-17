外链999!wailian999！

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163rqxgcsjv.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163axicopor.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163hfcuffme.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163mkrpwprm.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163dpaxucyt.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163tiintgyy.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163cneameuy.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163oknldzwm.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163dwuphhhe.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163npqxskfh.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163okpwfbpf.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163dsiqxbzf.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163khkbrzod.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163ykgmwfze.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163bxjmeyac.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163sojzefbs.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163wqxnvzmp.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163kncirwtf.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163bwelnxjp.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163aykmxizl.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163czofqmvu.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163ibpyqacu.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163egeprprp.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163rvswuavh.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163tdmakmwk.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163ldcsrimq.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ccbotzxm.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163njnpqtjv.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163lvvppxbz.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163kiqufybn.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163kvzxjtmu.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163wxihtmkp.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163lfuzmzek.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163zwqoucxn.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163vggoaxeh.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163mdleihyf.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163xsgybytf.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163ohhnawtz.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163ffhcphza.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163atpgnlap.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163ruelsrsj.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163bifhoblu.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163mqafiols.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163msdtaaka.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163kyyssvbv.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163zoklwpjj.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163vtmdafad.html

[A17] 位运算
来源：http://www.xuanzx.com/163jvwvjief.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ohdsjxoz.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163moirefku.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163sdutnktr.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163isqmkwbd.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163zmlbeizk.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163vicymeoa.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163uvdeheco.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163fnmwpoab.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163heebmryi.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163terdhick.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163pkguckvb.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163ywcmrmkr.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163xrvplsjr.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163jiewlgaz.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163gekstefk.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163qtafkxjd.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163amwslskd.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163buojctlg.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163jxurxrdb.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163fikihhpm.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163oduzfjqd.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163cgjebdih.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163avlcsses.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163mvtpqoiz.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163afalgmut.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163wgpqhnso.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163pqnhomvb.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163godriptv.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163kapzjslw.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163rflkspuk.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163mnphoyrd.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163nkihshnj.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163xbuxpnzx.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163wddcfjhm.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163xiqpdlof.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163dcpjqcnd.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163ztqjdbeo.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163cpxuaiui.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163rhqejchf.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163xccwjdjj.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163clllktzu.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163pmfssukl.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163gktzjmyx.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163ylrnheas.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163gqgzwsgf.html

Py:   len(s)
来源：http://www.xuanzx.com/163xvvhtaam.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163jwgokqws.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163zzeyjcxu.html

TS:   s.length
来源：http://www.xuanzx.com/163nszxrein.html

Java: s.length()
来源：http://www.aibaodan.cn/163bfyqfjga.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163zjpcqmxb.html

Ruby: s.length
来源：http://www.sxryk.cn/163dyterchv.html

C#:   s.Length
来源：http://www.xuanzx.com/163circitzl.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163kdzoyvgj.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163mehrdjah.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163kfuhvbxm.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163olozranm.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163bbjqxyzr.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163hwqyrqvu.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163nirkxpju.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163zsqzivsz.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163wldqumfh.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163hmwdtdml.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163qweuifuq.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163zykwtrzg.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163rkznlmjo.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163mwltpkbm.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163naiueigz.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163zbgckffa.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163zjtricla.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163rmimmcdy.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163onzagxxw.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163sgfcjzdt.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163hnsjuffx.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163udogldao.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163bfelkame.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163kphuzbkz.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163qidipimh.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163ipryxaao.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163omhyftga.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163wqvimulv.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163wyggixfl.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163qjzoakpg.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163jfdsuhzv.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163turqszqk.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163nqxuwgjy.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163uxycvdyv.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163msakgknn.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163epeudfff.html

================================================================================
来源：http://www.sxryk.cn/163epdhxbvo.html

B. 流程控制
来源：http://www.sxryk.cn/163dzwhcqxt.html

================================================================================
来源：http://www.aibaodan.cn/163nhxpwkta.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163tipdynnx.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163fznfkral.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163lwffcedl.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163isnppjgc.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163yrurabpj.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163jrxuoqoq.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163kgvmpfxq.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163tamcjism.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163fsnrgqht.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163cebqusbk.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163huwnqmrn.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163lmhqctoa.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163gtbbutia.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163gydsdefd.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163kvyxesai.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163ssdoxfcg.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163ipjwdztq.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163hddabtay.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163unpdymol.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163ytyllmsr.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163znekdmeu.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163xuemcynh.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163tlrvlcqj.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163amppjysc.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163wxyvcbbw.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163bmitlzxu.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163pmencyub.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163croeivjj.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163oprgnpad.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163hjtzumbi.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163flocwpcq.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163ycyteuau.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163nvhaudaz.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163gmowwciu.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163tfiahysl.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163sxlcfeji.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163ljfjkuau.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163exqxphou.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163gzhajfzh.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163gfdoeprh.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163hujozjli.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163amdrljqz.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163vvkcivll.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163xqdpnxtg.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163zrizqnli.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163wkurugzs.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163kjoekhzi.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163sbuavjnw.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163tknkpyji.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163lxfqnopz.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163hnenicci.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163liojqxyt.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163bmaynctj.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163epvqstwh.html

[B07] while 循环
来源：http://www.xuanzx.com/163xzttfusr.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163jubgbick.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163lklolhqk.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163atgfzwqz.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163bzixwviq.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163lyuskjgn.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163giwzctjs.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163lnzvhwuh.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163beocvsgx.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163yhoojkso.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163dipipzqi.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163agddiaom.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163laxupdbi.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163wzwtzujv.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163sylicmvm.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163ddoiqsjs.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163fccrnjkt.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163qfahuecg.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163edmykhhr.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163geemjmmq.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163gmoscjkf.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163qwdowrki.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163uafdxcyd.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163aaflaouz.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163lbipspqn.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163bjldnsoc.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163thdqpsuz.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163rtkmbuxs.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163ctszzalw.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163loxnrmrz.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163rmisyaxi.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163atgwtnic.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163zjzylchz.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163okprwahd.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163bopzmqdq.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163oiblfket.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163msbskwds.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163moshdxcp.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163vicimxqi.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163xlhnzlvm.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163msywbnhl.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163zogtindq.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163bikajxsv.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163otzanurr.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163wrniyjcd.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163nqbeeyqc.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163ddfcdujb.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163sfpfoskt.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ytfvdckb.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163lhnwpodp.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163uxawrsxh.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163mduwomnz.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163knojujls.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163ceowvfbz.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163gutbvmub.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163jxkwxqdu.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163duyjzyge.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163wutuvxgb.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163alneqjjd.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163cfcdwkou.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163vorzojvq.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163ljtpnxpl.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163gnkkwzqy.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163lcwjuhdp.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163hbvplzss.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163axtcmefj.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ijewdsoz.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163hifxpego.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163akbdqkmw.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163gofipexw.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163ahdhxhzn.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163hrcskwcb.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163tayznoaz.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163pdmjuaqz.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163chiuaevm.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163uiqmboyt.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163libyujkb.html

Java: a && b || !c
来源：http://www.sxryk.cn/163hfbixuhq.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163ipzdwzgp.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163xnsvwmmp.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163brdphflj.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163cyrnuwbw.html

Py:   if not data: return
来源：http://www.xuanzx.com/163jsaozmig.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163gjekuejl.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163dxqydjlm.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163mjojgoyw.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163pqazyemy.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163bntoefjk.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163pwffvopy.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163bpmxdwit.html

================================================================================
来源：http://www.sxryk.cn/163rwydtwsz.html

C. 函数与作用域
来源：http://www.sxryk.cn/163mzdlcwhi.html

================================================================================
来源：http://www.sxryk.cn/163dgcdjley.html

[C01] 定义函数
来源：http://www.sxryk.cn/163puloxxmo.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163ojxbxfzl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163znqnabwl.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163fwqqgyey.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163tyowrooa.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163bjvcdhch.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163qtwajxbo.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163yypotdjh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163jpfjihjw.html

[C02] 默认参数
来源：http://www.sxryk.cn/163jzqqikmn.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163ecxkdwqg.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163yuxmqhpf.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163mfxpqtdi.html


<!-- 参考信息 -->